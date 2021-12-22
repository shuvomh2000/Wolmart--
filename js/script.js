$(function () {
  'use strict';

  // Popup start
  $('.close_button').on('click', function(){
    $('.popup_part').fadeOut();
  }); 
  // Popup end

  // Menu fix part start
  var navOff = $('#menu_part').offset().top;

  $(window).scroll(function () {
    var scroll = $(this).scrollTop();

    if (scroll > navOff) {
      $('#menu_part').addClass('fix');
    } else {
      $('#menu_part').removeClass('fix');

    }
  });
  // Menu fix part end


  // Banner slider start
  $('#banner_part').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: false,
    dots: true,
  });
  // Banner slider end

  // Count down start
  $(".contDown")
    .countdown("2023/06/07", function (event) {
      $(this).text(
        event.strftime('%D days, %H:%M:%S')
      );
    });
  // Count down end

  // Daily offer toggle start
  $(".ex-click").click(function () {
    $(".ex-toggle").toggle();
  }); /* extra large */

  $(".lg-click").click(function () {
    $(".lg-toggle").toggle();
  }); /* large */

  $(".md-click").click(function () {
    $(".md-toggle").toggle();
  }); /* medium */

  $(".sm-click").click(function () {
    $(".sm-toggle").toggle();
  }); /* small */

  // Inc/Dec start
  $('.stepper-widget').stepper();
  // Inc/Dec end


  // Shop main countdown start
  $(".day").countdown("2021/11/20", function (event) {
    $(this).html(event.strftime('%D <span> Days </span>'));
  });

  $(".hour").countdown("2021/11/20", function (event) {
    $(this).html(event.strftime('%H <span> Hours </span>'));
  });

  $(".minute").countdown("2021/11/20", function (event) {
    $(this).html(event.strftime('%M <span> Mins </span>'));
  });

  $(".second").countdown("2021/11/20", function (event) {
    $(this).html(event.strftime('%S <span> Secs </span>'));
  });
  // Shop main countdown end

  // Blog post slider start
  $('.post_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: true,
    prevArrow: '<i class="fas fa-chevron-left prev_arr"></i>',
    nextArrow: '<i class="fas fa-chevron-right nxt_arr"></i>',
  });
  // Blog post slider end

  // Transparent counter start
  $('.counter-count').counterUp({
    delay: 10,
    time: 1000
  });

  // Transparent counter end

   // Success faq slider start
   $('.test_slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: false,
    dots: true,
  });
  // Success faq slider end

  
});
