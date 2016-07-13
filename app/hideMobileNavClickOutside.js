function hideMobileNavClickOutside() {
    $(document).mouseup(function(e){
        var menu = $('#main-nav-mobile');

        if (!menu.is(e.target) && menu.has(e.target).length === 0){
            menu.animate({
                'right': '-200px'
            });
        }
    });
}

module.exports = hideMobileNavClickOutside;