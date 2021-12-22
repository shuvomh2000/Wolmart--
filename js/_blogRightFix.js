// blog right fix start
var blogOffset = $('.pageContent_right').offset().top;

$(window).on('scroll', function () {
    var blog_right = $(this).scrollTop();
    if (blog_right > blogOffset) {
        $('.pageContent_right').addClass('blogRight_fix');
    } 
    else {
        $('.pageContent_right').removeClass('blogRight_fix');
    }
});
// blog right fix end

