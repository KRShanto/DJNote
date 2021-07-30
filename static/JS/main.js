$(document).ready(()=>{

    // Common variables
    const nav = document.querySelector('nav')

    //*************** */ This is for messageSection*****************//
    const messageSection = document.querySelectorAll('.messageSection')
    const messageBtn = document.querySelectorAll('.messageSection .messageBtn')

    for (let m = 0; m < messageSection.length; m++) {
        messageBtn[m].addEventListener('click', function(){
            messageSection[m].style.display = 'none'
        })
    }

    // ***************** This is for responsive nav bar. ***************//
    // ****When the website comes on a specific width, a class will automatic added  */
    // *****Then this a hamburger menu will be shown to the user.
    const hamburger = document.querySelector('nav .hamburgerMenu')
    const hamburgerSpan = document.querySelectorAll('nav .hamburgerMenu span')
    const navUL = document.querySelector('nav ul')


    let hamburgerClickIndex = 0;
    hamburger.addEventListener('click', ()=>{
        // This variable will increase when the the menu has been clicked. Then we can set a if-else statement will this value of the variable
        hamburgerClickIndex++;

        if(hamburgerClickIndex % 2 == 1){
            navUL.style.right = '0';
            makeCrossBar(true)
        }
        else{
            navUL.style.right = '-100%'
            makeCrossBar(false)
        }
    })
        

        function makeCrossBar(boolean){
            // if the parameter boolean is true: make the menu to 'cross'
            // if the parameter is false : make the menu to 'bar'

            if (boolean == true){
                for (let i = 0; i < hamburgerSpan.length; i++) {
                    const hamSpan = hamburgerSpan[i];
                    hamSpan.style.position = 'absolute'
                }
                hamburgerSpan[0].style.transform = 'rotate(45deg)'
                hamburgerSpan[1].style.transform = 'rotate(-45deg)'
                hamburgerSpan[2].style.display = 'none'
                hamburgerSpan[3].style.display = 'none'
                
            }

            else if ( boolean == false){
                for (let i = 0; i < hamburgerSpan.length; i++) {
                    const hamSpan = hamburgerSpan[i];
                    hamSpan.style.transform = 'rotate(0deg)'
                    hamSpan.style.position = 'relative';
                    hamSpan.style.display = 'inline'
                }
                console.log('It worked')
            }
        }

        function mediaFunction(x) {
            if (x.matches) { 
                nav.classList.add('responsive')
                console.log('Media come')
            }
            else{
                nav.classList.remove('responsive')
                console.log('Media gone')
            }
        }
                
            // when the media match, the function will add a class 'responsive' to the nav bar.
        const x = window.matchMedia("(max-width: 1000px)")
        mediaFunction(x) // Call listener function at run time
          x.addListener(mediaFunction) 


})

