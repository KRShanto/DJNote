$(document).ready(()=>{
    console.log('hello je. kaise laga mera majag??')
    const createNoteIcon = $('.createNoteIcon');
    // console.log(createNote.clientWidth)

    
    
    function widthAndheightSetter(num=1){
        let mainHeightWidth = 7;

        createNoteIcon.css('height', mainHeightWidth+'rem')
        createNoteIcon.css('width', mainHeightWidth +'rem')

        createNoteIcon.css('transform', `scale(${num})`)
    }
    
    // console.log(createNoteIcon)
    widthAndheightSetter()

    
    createNoteIcon.click(()=>{

        widthAndheightSetter(1.3)

        setTimeout(() => {
            widthAndheightSetter(1)
        }, 200);

        console.log(createNoteIcon)
    })
    
    
    
    
    
    
    
    
    
    
    
    console.log('its done')
})