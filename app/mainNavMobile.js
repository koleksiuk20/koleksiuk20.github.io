function mainNavMobile() {
    $('#mobile-icon').bind('click', function() {
        event.preventDefault();
        $('#main-nav-mobile').show();
    });
    $('#mobile-close').bind('click', function() {
        event.preventDefault();
        $('#main-nav-mobile').hide();
    });
    $('.main-nav-list-mobile li').bind('click', function() {
        event.preventDefault();
        $('#main-nav-mobile').hide();
    });
}

module.exports = mainNavMobile;