function animatedProgressBar() {
    var windowWidth = $(window).width();

    if (windowWidth > 992) {
        $(window).scroll(function () {
            $('.animatedEntrance').each(function () {
                var imagePos = $(this).offset().top;
                var topOfWindow = $(window).scrollTop();

                if (imagePos < topOfWindow + 240) {
                    $('.progress-bar-value').css('visibility', 'visible').removeClass('slideOutLeft').addClass('animated slideInLeft');
                    $('.progress-bar').css('visibility', 'visible').removeClass('slideOutLeft').addClass('animated slideInLeft');
                }
                else {
                    $('.progress-bar-value').removeClass('slideInLeft').addClass('slideOutLeft');
                    $('.progress-bar').removeClass('slideInLeft').addClass('slideOutLeft');
                }
            });
        });
    }
}

module.exports = animatedProgressBar;