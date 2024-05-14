

$(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
        $('#topHead').addClass('background');
    } else {
        $('#topHead').removeClass('background');
    }
});

