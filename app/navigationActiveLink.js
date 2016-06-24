function navigationActiveLink() {
    var links = $('.main-nav-list a');
    var headerHeight = $('header').height();

    var menuLinks = links.map(function(_index, link) {
        var jQueryObj = $(link);
        var anchor = jQueryObj.attr('href');
        var section = $(anchor);

        var height = section.height();

        var topOffset = section.offset().top;
        var bottomOffset = topOffset + height;

        return { element: jQueryObj, topOffset: topOffset, bottomOffset: bottomOffset };
    });

    $(document).on('scroll', function() {
        menuLinks.each(function(_index, navigationSection) {
            var currentScrollTop = $(document).scrollTop() + headerHeight;

            if(currentScrollTop > navigationSection.topOffset && currentScrollTop < navigationSection.bottomOffset) {
                links.removeClass('menu-link-active');
                navigationSection.element.addClass('menu-link-active');
            }
        });
    });
}

module.exports = navigationActiveLink;