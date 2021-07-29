$(document).ready(()=>{
    //*************** */ This is for messageSection*****************//
    const messageSection = document.querySelectorAll('.messageSection')
    const messageBtn = document.querySelectorAll('.messageSection .messageBtn')

    for (let m = 0; m < messageSection.length; m++) {
        messageBtn[m].addEventListener('click', function(){
            console.log('Hello boi')
            messageSection[m].style.display = 'none'
        })

        
    }
















})

