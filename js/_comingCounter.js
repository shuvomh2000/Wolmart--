$(function () {
    // Coming soon start
    $(".coming_day").countdown("2022/01/01", function (event) {
        $(this).html(
            event.strftime('<div><h2>%D :</h2> <span>Days</span></div>')
        );
    });
    $(".coming_hour").countdown("2022/01/01", function (event) {
        $(this).html(
            event.strftime('<div><h2>%H :</h2> <span>Hours</span></div>')
        );
    });
    $(".coming_minute").countdown("2022/01/01", function (event) {
        $(this).html(
            event.strftime('<div><h2>%M :</h2> <span>Minutes</span></div>')
        );
    });
    $(".coming_second").countdown("2022/01/01", function (event) {
        $(this).html(
            event.strftime('<div><h2>%S </h2> <span>Seconds</span></div>')
        );
    });
    // Coming soon end
});