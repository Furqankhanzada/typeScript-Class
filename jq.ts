$(function(){
    $('#next').on('click', function(){
            $('ul li.active').removeClass('active').next().addClass('active')
    })
    $('#prev').on('click', function(){
            $('ul li.active').removeClass('active').prev().addClass('active')
    })
    $('.parent').on('click', function(){
            $('li').parent().toggleClass('parent')
    })

    console.log($('ul').children())
    console.log($('li').last().siblings())
    console.log($('li').last().siblings())
})