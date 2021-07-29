$(document).ready(()=>{
    // This is for createNOTE.html

    // Hiding this input tag because its not for the user. 
    $('.createNewNote form .hidden').css('display', 'none');

    //Submitting the form
    const form = document.getElementById('createNoteForm')
    const formClickBtn = document.querySelector('.createNewNote .createNoteBtn');
    const noteTitle = document.querySelector('.createNewNote form #title')
    const hiddenInput = document.querySelector('.createNewNote form .hidden')
    const noteBodyDiv = document.querySelector('.createNewNote .noteDesc')
    // console.log(formClickBtn)
    // console.log(form)

    formClickBtn.addEventListener('click', function(){
        // console.log("Hello world. Click btton found")

        // Validation //
        console.log(noteBodyDiv.innerHTML.length);



        if ( (noteBodyDiv.innerHTML.length > 0) && (noteTitle.value.length > 0) ){

            hiddenInput.value = noteBodyDiv.innerHTML

            setTimeout(() => {
                form.submit();
            }, 3300);

            // console.log("its all right")

            // console.log('Title has', noteTitle.value.length, 'letters')

            // console.log('Body has', noteBodyDiv.innerHTML.length, 'letters')

            

        }
        else{
            console.error("Fish you")

            
        }
        
        // console.log(note)
        // &&&&&&&&& I will make a validator in later &&&&&&&&&&&//
        // &&&&&&&&& I will make a message showing option will javascript in later &&&&&&&&&&&//

        


    })








})