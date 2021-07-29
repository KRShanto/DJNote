$(document).ready(()=>{
    console.log('hello je. kaise laga mera majag??')
    const createGroupIcon = $('.createGroup .createGroupIcon');
    const createGroup = $('.createGroup .formWraper')
    const createGroupCancelBtn = $(".createGroup .formWraper form .cancelBtn")
    // console.log(createNote.clientWidth)

    
    
    function widhtAnime(num=1){
        
        createGroupIcon.css('transform', `scale(${num})`)
    }
    
    // console.log(createGroupIcon)
    // widhtAnime()

    
    createGroupIcon.click(()=>{

        widhtAnime(1.3)

        setTimeout(() => {
            widhtAnime(1)

            $('.createGroup .formWraper h2 span').css('right', '-100%')
        }, 200);

        
        createGroup.css('transform', 'scale(1)')


        // console.log(createGroupIcon)
    })
    
    createGroupCancelBtn.click(()=>{
        console.log("hello python lovers")
        createGroup.css('transform', 'scale(0)')
        $('.createGroup .formWraper h2 span').css('right', '0')
    })
    
    
    
    
    
    
    
    
    
    
    console.log('its done')
})