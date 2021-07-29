"""DJNote URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from home import views

urlpatterns = [
    # GET request**********
    path('admin/', admin.site.urls, name='admin'),

    # GET + POST request. Post request for creating note's group (complete)*****************
    path('', views.home, name='home'),
 
    # GET request only*************
    path('search/', views.searchFunction, name='search'),

    # GET request only**************
    path('allnotes/', views.allNotes , name='allnotes'),

    # GET + POST request. post request for updating the group info. (complete)*************
    path('group-<int:group>/', views.group, name='group'),
 
    # GET request only. GET request for deleting 'group' which id will be <int:group>(completed)***********
    path('group-<int:group>-delete', views.deleteGroup, name='deleteGroup'),

    # GET + POST request. Post request for creating a new note which group's id will be <int:group>(complete)**********
    path('group-<int:group>-createNOTE', views.createNOTE ,name='createNOTE') ,

    # GET request only**************
    path('group-<int:group>/note-<int:note>/', views.note,
    name='note'),

    # GET + POST request. Post request for update the note which id will be <int:note>, group's id will be <int:group>.(complete)*************
    path('group-<int:group>/note-<int:note>-update', views.updateNOTE, name='updateNOTE'),

    # POST request for deleting the note which id will be <int:note> and group will be <int:group>
    path('group-<int:group>/note-<int:note>-delete', views.deleteNOTE, name='deleteNote')

]
  