// checkout fix start
var checkoutOffset = $('.your_order').offset().top;

$(window).on('scroll', function () {
    var billing = $(this).scrollTop();
    if (billing > checkoutOffset) {
        $('.your_order').addClass('checkout_fix');
    } 
    else {
        $('.your_order').removeClass('checkout_fix');
    }
});
// checkout fix end