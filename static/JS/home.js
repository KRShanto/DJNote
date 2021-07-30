$(document).ready(()=>{

    // ************ These are for Creating a new group. *************//
    const createGroupIcon = $('.createGroup .createGroupIcon');
    const createGroup = $('.createGroup .formWraper')
    const createGroupCancelBtn = $(".createGroup .formWraper form .cancelBtn")


    function widhtAnime(num=1){
        createGroupIcon.css('transform', `scale(${num})`)
    }
    
    createGroupIcon.click(()=>{
        widhtAnime(1.3)
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
    
})