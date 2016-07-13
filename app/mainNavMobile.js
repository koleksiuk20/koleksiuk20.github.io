function mainNavMobile() {
    $('#mobile-icon').bind('click', function() {
        event.preventDefault();
        $('#main-nav-mobile').animate({
            'right': '0'
        });
    });
    $('#mobile-close').bind('click', function() {
        event.preventDefault();
        $('#main-nav-mobile').animate({
            'right': '-200px'
        });
    });
    $('.main-nav-list-mobile li').bind('click', function() {
        event.preventDefault();
        $('#main-nav-mobile').animate({
            'right': '-200px'
        });
    });
}

module.exports = mainNavMobile;