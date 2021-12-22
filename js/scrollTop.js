$(function () {
    // Scroll top start
    $('.scroll_btn').on('click', function(){
        $('html,body').animate({
            scrollTop: 0,
        },2000);
    });

    $(window).scroll(function(){
        var scrollTop = $(this).scrollTop();

        if(scrollTop > 400){
            $('.scroll_btn').fadeIn();
        }
        else{
            $('.scroll_btn').fadeOut();
        }
    });
    // Scroll top end
});