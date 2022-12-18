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

    formClickBtn.addEventListener('click', function(){

        // Validation //
        if ( (noteBodyDiv.innerHTML.length > 0) && (noteTitle.value.length > 0) ){
            hiddenInput.value = noteBodyDiv.innerHTML

            setTimeout(() => {
                form.submit();
            }, 500);
        }
        else{
            console.error("Fish you")
        }
        
        // &&&&&&&&& I will make a validator in later &&&&&&&&&&&//
        // &&&&&&&&& I will make a message showing option will javascript in later &&&&&&&&&&&//
    })








})