$(document).ready(function(){
    console.log('INITIALIZED!')

    ///////////////////////////////////////////
    story = $('div').filter('#story')
    header = $('h1').filter('#clickdrop')

    story.hide()

    function showStory(order){
        header.eq(order).click(function(){
            story.eq(order).slideToggle()
            console.log(story.length)
        })
    }

    for(var i = 0; i<story.length; i++) {
        showStory(i)
    }
    ///////////////////////////////////////////
    modalButton = $('#modalbutton')
    modal = $('#myModal')

    modalButton.click(function(){
        modal.hide()
        modal.fadeIn(500)
    })
    ///////////////////////////////////////////

    question = $('div').filter('.question')
    answer   = $('div').filter('.answer')
    answer.hide()
    
    function toggleAnswer(i){
        $('.question').eq(i).click(function(){
            $('.answer').eq(i).slideToggle(500)
        })
    }

    for (var i = 0; i < question.length; i++){
        toggleAnswer(i)
    }
})