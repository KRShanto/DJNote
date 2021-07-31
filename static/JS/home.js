import { AlertMessage } from "./module.js";

$(document).ready(()=>{

    // ************ These are for Creating a new group. *************//
    const createGroupIcon = $('.createGroup .createGroupIcon');
    const createGroup = $('.createGroup .formWraper')
    const createGroupCancelBtn = $(".createGroup .formWraper form .cancelBtn")


    function widhtAnime(num=1){
        createGroupIcon.css('transform', `scale(${num})`)
    }
    
    createGroupIcon.click(()=>{
        widhtAnime(0.8)
        setTimeout(() => {
            widhtAnime(1)
            // Making an animation to the text
            $('.createGroup .formWraper h2 span').css('transform', 'scaleX(0)')
        }, 200);        
        createGroup.css('transform', 'scale(1)')

    })
    
    createGroupCancelBtn.click(()=>{

        createGroup.css('transform', 'scale(0)')
        $('.createGroup .formWraper h2 span').css('transform', 'scaleX(1)')
    })
    

    // This if for Rendering Alert message to the user when the user clicks on '.delete' in the home page for the group sections.
    // NOTE: we don't need to give an addEventListener when calling the 'alertONdelete()' method. Because it is specified in the method already.
    const groupDelete = document.querySelectorAll('.allGroup .group .links .delete');

    // Calling the AlertMessage class, So we can alert ther user when he/she try to delete any group.
    const alertFORdeleteGroup = new AlertMessage(groupDelete, 'Group')
    alertFORdeleteGroup.alertONdelete()
    const a = document.querySelectorAll('a')
    



})