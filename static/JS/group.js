$(document).ready(()=>{
    const createNoteIcon = $('.createNoteIcon');
    
    function widthAndheightSetter(num=1){
        let mainHeightWidth = 7;

        createNoteIcon.css('height', mainHeightWidth+'rem')
        createNoteIcon.css('width', mainHeightWidth +'rem')

        createNoteIcon.css('transform', `scale(${num})`)
    }
    widthAndheightSetter()

    createNoteIcon.click(()=>{
        widthAndheightSetter(1.3)
        setTimeout(() => {
            widthAndheightSetter(1)
        }, 200);

    })
    
    
})