// *********** This file will handle every class and some functions *********** //

export default class ResponsiveNess{

    // This method will add a class to the <nav> element. that class will make the <nav> responsive when it the window goes to a specific widht.
    navBarResponsiveNess(x) {

        const nav = document.querySelector('nav')
        if (x.matches) { 
            // adding this class for make the nav bar responsive
            nav.classList.add('responsive')
        }
        else{
            nav.classList.remove('responsive')
        }
    }
}



// This is for rendering alert messages to the user.
class AlertMessage{
    // It will take take these parameters and pass them into all methods.
    constructor(element, element_type = '', extra_message ='', author = document.domain){
        // 'element' is which element you want to target. 'element_type' is which type of element is this. for example: 'note', 'group', 'form'. 'extra_message' is extra message which will display after the default message. Default might be different for each method. 
        
        this.element = element
        this.element_type = element_type
        this.extra_message = extra_message;
        this.author = author
    }
    // ********* The difference between "extraa_message" and "custom_message" is that 'extra_message' will append the given message by creating its instance after the default message. But 'custom_message' will override the default message if default_message= false. Else 'custom_message' will do nothing.
    
    alertONdelete(custom_message='', default_message = true){
        // ** 'custom_message' this parameter will the override the default message and givern message when defining instanse if "default_message" == false. **

       // Making some text/message for the alert box //
       let main_message = ''
       if (default_message == true) {

           main_message = `Do you really want to delete this ${this.element_type}? ${this.extra_message}`
           
        }
        else if (default_message == false){
            main_message = custom_message;
        }
        else{
            main_message = "Error in your code. You need to set your 'default_message' argument 'true' or 'false' ";
        }   

        for (let i = 0; i < this.element.length; i++) {
            // When the user clicks on the <a> tag, the default behaviour will not be applied for (preventDefault) method. And after that the alert box will be shown.
            // const element = element[i];
            const deleteBtn = this.element[i];
            deleteBtn.addEventListener('click', function(e){
                e.preventDefault();

                renderAlert(deleteBtn)
            })


            // If we try to access this parameters directly, we can't. So I am making variables for accessing these parementers.
            const outer_author = "Alert by " + this.author;
            
            function renderAlert(element){
                // ***** Rendering alert box *******//
               
                const allElements = document.querySelectorAll('*')
                const alertBoxChilds = document.querySelectorAll('.alertbox *')
                
                document.querySelector('.alertbox').style.transform = 'translateX(-50%) scale(1)';

                document.querySelector('.alertbox .alertMessage .author').innerHTML = outer_author;

                document.querySelector('.alertbox .alertMessage .message').innerHTML = main_message;

                document.querySelector('.alertbox .alertOptions a').href = element.href;

                document.querySelector('.alertbox .alertOptions button').addEventListener('click', ()=>{
                    document.querySelector('.alertbox').style.transform = 'translateX(-50%) scale(0)';
                    // Increasing all elment's opacity when 'cancel' button is pressed. //
                    for (let i = 0; i < allElements.length; i++) {
                        const element = allElements[i];
                        element.classList.remove('opacity-wale');
                    }

                })
                 // Decreasing all element's opacity for highlight the alertBox. //
                for (let i = 0; i < allElements.length; i++) {

                    const element = allElements[i];
                    element.classList.add('opacity-wale');
                    document.querySelector('.alertbox').classList.remove('opacity-wale');
                    document.querySelector('html').classList.remove('opacity-wale')
                    document.body.classList.remove('opacity-wale')
                }
                
                for (let i = 0; i < alertBoxChilds.length; i++) {
                    const element = alertBoxChilds[i];
                    element.classList.remove('opacity-wale')
                }
            }
        }
    }
}

export {AlertMessage}