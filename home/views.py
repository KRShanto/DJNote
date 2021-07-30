from django.contrib import messages
from django.db.models import query
from django.http.response import HttpResponse
from django.shortcuts import redirect, render
from .models import Group, Note
# In home page, all groups will be shown.
# In group page, all notes will be shown related to that group.
# In note page, the specific note will be shown


# Create your views here.
def home(req):
    groups = Group.objects.all()
    # Post request for Creating Group
    if req.method == 'POST':
        name = req.POST['name']
        newGroup = Group(name = name)
        newGroup.save()
        messages.success(req, "Your Group has been created")

    return render(req, 'home.html' , {'groups':groups, })






def group(req, group): 
    groupOFnote = Group.objects.get(id = group)
    notesOFgroup = Note.objects.filter(group__id = group)

    # Updating Group name
    if req.method == 'POST':
        name = req.POST['name']
        groupOFnote.name = name
        groupOFnote.save()
        messages.success(req, 'Your group has been updated')

    return render(req, 'group.html', {'group':groupOFnote, 'notes':notesOFgroup,})



def note(req, group, note):
    groupOFnote = Group.objects.get(pk = group)
    noteOFgroup = Note.objects.filter(group__id = group, pk = note)

    return render(req, 'note.html', {'group':groupOFnote, 'note':noteOFgroup})




def allNotes(req):
    return render(req, 'allNotes.html' , {'notes':Note.objects.all(), 'allGroup':Group.objects.all(), })




def searchFunction(req):
    query =  req.GET['searchNote']
    notes = Note.objects.filter(title__icontains = query)
    
    
    return render(req, 'search.html' , {'notes':notes, 'query':query })

def createNOTE(req, group):
    group = Group.objects.get(pk= group)

    if req.method == 'POST':
        noteTitle = req.POST['title']
        noteDesc = req.POST['desc']

        newNote = Note(group = group, title = noteTitle, desc = noteDesc)
        newNote.save()
        messages.success(req, "IT is a post request")
        return redirect(f'/group-{group.id}')

    return render(req, 'createNOTE.html', {"group":group})



def updateNOTE(req, group, note):
    groupOFnote = Group.objects.get(pk = group)
    noteOFgroup = Note.objects.filter(group__id = group, pk = note)

    if req.method == "POST":
        newTitle = req.POST['title']
        newDesc = req.POST['desc']

        # NOTE: noteOFgroup returns object. So we need to access its first element or need to use for loop

        noteOFgroup[0].title = newTitle
        noteOFgroup[0].desc = newDesc

        noteOFgroup[0].save()

    return render(req, 'updateNOTE.html', {'group':groupOFnote, 'note':noteOFgroup})
    # return HttpResponse('This is update note page')



def deleteGroup(req, group):
    groupRefference = Group.objects.get(pk = group)
    groupRefference.delete()

    messages.success(req, 'Your Group has been deleted.')
    return redirect('/')




def deleteNOTE(req, group, note):
    groupOFnote = Group.objects.get(pk = group)
    noteOFgroup = Note.objects.filter(group__id = group, pk = note)
    noteOFgroup[0].delete()
    messages.success(req, 'Delete SuccessFully')
    
    return redirect(f'/group-{groupOFnote.id}/')
