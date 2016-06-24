/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var navigationActiveLink = __webpack_require__(1);
	var initPageScrollLinks = __webpack_require__(2);
	var initMainNavMobile = __webpack_require__(3);
	var initAnimatedProgressBar = __webpack_require__(4);
	var initSliderTransition = __webpack_require__(5);
	var hideMobileNavClickOutside = __webpack_require__(6);
	var initFormValidator = __webpack_require__(8);

	$(document).ready(function () {

	    // Page scroll anchors init
	    initPageScrollLinks();

	    // Mobile menu init on click
	    initMainNavMobile();

	    // Init animated progress bar
	    initAnimatedProgressBar();

	    // Init slider transition
	    initSliderTransition();

	    // Init hide mobile nav on click outside container
	    hideMobileNavClickOutside();

	    // Init form validator
	    initFormValidator();
	});

	$(window).load(function () {

	    // Change active menu link on scroll
	    navigationActiveLink();
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	function navigationActiveLink() {
	    var links = $('.main-nav-list a');
	    var headerHeight = $('header').height();

	    var menuLinks = links.map(function (_index, link) {
	        var jQueryObj = $(link);
	        var anchor = jQueryObj.attr('href');
	        var section = $(anchor);

	        var height = section.height();

	        var topOffset = section.offset().top;
	        var bottomOffset = topOffset + height;

	        return { element: jQueryObj, topOffset: topOffset, bottomOffset: bottomOffset };
	    });

	    $(document).on('scroll', function () {
	        menuLinks.each(function (_index, navigationSection) {
	            var currentScrollTop = $(document).scrollTop() + headerHeight;

	            if (currentScrollTop > navigationSection.topOffset && currentScrollTop < navigationSection.bottomOffset) {
	                links.removeClass('menu-link-active');
	                navigationSection.element.addClass('menu-link-active');
	            }
	        });
	    });
	}

	module.exports = navigationActiveLink;

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	function initPageScrollLinks() {
	    $('.page-scroll').on('click', function (event) {
	        event.preventDefault();

	        var target = $(event.target).attr('href'),
	            elem = $(target),
	            offset = elem.offset().top - 60;

	        $('body, html').animate({ scrollTop: offset + 1 }, 500);
	    });
	}

	module.exports = initPageScrollLinks;

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	function mainNavMobile() {
	    $('#mobile-icon').bind('click', function () {
	        event.preventDefault();
	        $('#main-nav-mobile').show();
	    });
	    $('#mobile-close').bind('click', function () {
	        event.preventDefault();
	        $('#main-nav-mobile').hide();
	    });
	    $('.main-nav-list-mobile li').bind('click', function () {
	        event.preventDefault();
	        $('#main-nav-mobile').hide();
	    });
	}

	module.exports = mainNavMobile;

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	function animatedProgressBar() {
	    var windowWidth = $(window).width();

	    if (windowWidth > 992) {
	        $(window).scroll(function () {
	            $('.animatedEntrance').each(function () {
	                var imagePos = $(this).offset().top;
	                var topOfWindow = $(window).scrollTop();

	                if (imagePos < topOfWindow + 240) {
	                    $('.progress-bar-value').css('visibility', 'visible').addClass('animated slideInLeft');
	                    $('.progress-bar').css('visibility', 'visible').addClass('animated slideInLeft');
	                }
	            });
	        });
	    }
	}

	module.exports = animatedProgressBar;

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';

	function sliderTransition() {
	    var ypos = window.pageYOffset;
	    var background = document.getElementById('top-slider');

	    background.style.top = ypos * -0.5 + 'px';
	}

	window.addEventListener('scroll', sliderTransition);

	module.exports = sliderTransition;

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';

	function hideMobileNavClickOutside() {
	    $(document).mouseup(function (e) {
	        var menu = $('#main-nav-mobile');

	        if (!menu.is(e.target) && menu.has(e.target).length === 0) {
	            menu.hide();
	        }
	    });
	}

	module.exports = hideMobileNavClickOutside;

/***/ },
/* 7 */,
/* 8 */
/***/ function(module, exports) {

	'use strict';

	function initFormValidator() {
	    var form = $('form');
	    var name = $('#name');
	    var email = $('#email');
	    var subject = $('#subject');
	    var message = $('#message');
	    var success = $('<div>Your message has been sent</div>');
	    var counterMaxLength = 500;
	    var counterRemainingLength = counterMaxLength;
	    var counter = $('#counter');

	    // Validate each input except textarea
	    form.submit(function (event) {
	        event.preventDefault();

	        var isValid = true;

	        if (name.val().length < 3) {
	            name.next().css('display', 'block');
	            name.keyup(function () {
	                name.next().css('display', 'none');
	            });
	            isValid = false;
	        }
	        if (!validateEmail(email.val())) {
	            email.next().css('display', 'block');
	            email.keyup(function () {
	                email.next().css('display', 'none');
	            });
	            isValid = false;
	        }
	        if (subject.val().length < 3) {
	            subject.next().css('display', 'block');
	            subject.keyup(function () {
	                subject.next().css('display', 'none');
	            });
	            isValid = false;
	        }
	        if (isValid) {
	            success.appendTo(form).css({
	                'position': 'absolute',
	                'top': '90%',
	                'left': '40%',
	                'display': 'inline-block',
	                'font-weight': 'bold',
	                'color': 'green'
	            });
	            setTimeout(function () {
	                success.remove();
	            }, 3000);
	            $(this).closest(form).find('input[type=text], input[type=email], textarea').val('');
	            counter.html(counterRemainingLength + '/' + counterMaxLength);
	        }
	    });

	    // Validate email regular regex
	    function validateEmail(email) {
	        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	        return re.test(email);
	    }

	    // Text area counter
	    function counterMessage() {
	        counter.html(counterRemainingLength + '/' + counterMaxLength);

	        message.keyup(function (e) {
	            e.preventDefault();

	            var textLength = message.val().length;
	            var counterRemainingLength = counterMaxLength - textLength;

	            counter.html(counterRemainingLength + '/' + counterMaxLength);
	        });
	    }

	    counterMessage();
	}

	module.exports = initFormValidator;

/***/ }
/******/ ]);