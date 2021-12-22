$(function () {
    // Calendar start
    $('.calendar').pignoseCalendar({
        date: moment('2021-10-23'),
        minDate: moment('2017-06-01'),
        maxDate: moment('2040-01-01')
    });
    // Calendar end
})