/* ================================
 ===  BACKGROUND SLIDER        ====
 ================================= */
$(document).ready(function () {
    $.vegas('slideshow', {
        delay: 5000,
        backgrounds: [
            /*{src: '../images/backgrounds/bg1.jpg', fade: 1000},
            {src: '../images/backgrounds/bg4.jpg', fade: 1000},*/
            {src: '../images/backgrounds/bg5.jpg', fade: 1000},
            {src: '../images/backgrounds/bg6.jpg', fade: 1000},
            {src: '../images/backgrounds/bg7.jpg', fade: 1000},
            {src: '../images/backgrounds/bg8.jpg', fade: 1000}
        ]
    });
    var $window = $(window);
    $('div[data-type="background"], header[data-type="background"], section[data-type="background"]').each(function () {
        var $bgobj = $(this);
        $(window).scroll(function () {
            var yPos = -($window.scrollTop() / $bgobj.data('speed'));
            var coords = '50% ' + yPos + 'px';
            $bgobj.css({
                backgroundPosition: coords
            });
        });
    });
    $('.main-nav-list').onePageNav({
        changeHash: true,
        scrollSpeed: 750,
        scrollThreshold: 0.5,
        filter: ':not(.external)'
    });
    $('.countdown').downCount({
        date: '09/01/2017 12:00:00',
        offset: +8
    }, function () {
        $('.count-div').empty().append(
          '<h3>ICO已开始，请前往<a href="http://www.ico365.com" target="_blank">ico365</a>参与众筹</h3>'
        )
    });

    var owl = $("#client-feedbacks");
    owl.owlCarousel({
        items: 3, //10 items above 1000px browser width
        itemsDesktop: [1000, 2], //5 items between 1000px and 901px
        itemsDesktopSmall: [900, 1], // betweem 900px and 601px
        itemsTablet: [600, 1], //2 items between 600 and 0
        itemsMobile: false // itemsMobile disabled - inherit from itemsTablet option
    });
})


/* =================================
 LOADER
 =================================== */
// makes sure the whole site is loaded
jQuery(window).load(function () {
    // will first fade out the loading animation
    jQuery(".status").fadeOut();
    // will fade out the whole DIV that covers the website.
    jQuery(".preloader").delay(1000).fadeOut("slow");
})

/*---------------------------------------------*
 * Mobile menu
 ---------------------------------------------*/
$('#bs-navbar-collapse').find('a[href*=#]:not([href=#])').click(function () {
    if($(window).width() < 768){
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: (target.offset().top - 0)
                }, 800);
                if ($('.navbar-toggle').css('display') != 'none') {
                    $(this).parents('.container').find(".navbar-toggle").trigger("click");
                }
                return false;
            }
        }
    }

});
/* =================================
 ===  Bootstrap Fix              ====
 =================================== */
if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
    var msViewportStyle = document.createElement('style')
    msViewportStyle.appendChild(
        document.createTextNode(
            '@-ms-viewport{width:auto!important}'
        )
    )
    document.querySelector('head').appendChild(msViewportStyle)
}

$(window).on('scroll', _.debounce(function () {
    var top = jQuery(document).scrollTop();
    var height = 300;
    if (top > height) {
        $('.js-top').addClass('active');
        if($(window).width() > 767 && !$('#main-nav').hasClass('menu-scroll')){
          $('#main-nav').addClass('menu-scroll');
        }
    } else {
        $('.js-top').removeClass('active');
        if ($(window).width() > 767 && $('#main-nav').hasClass('menu-scroll')) {
            $('#main-nav').removeClass('menu-scroll');
        }
    }
}, 30));

$('.js-gotop').on('click', function (event) {

    event.preventDefault();

    $('html, body').animate({
        scrollTop: $('html').offset().top
    }, 800, 'easeInOutExpo');

    return false;
});
/*---------------------------------------*/
/*  SMOOTH SCROLL FRO INTERNAL #HASH LINKS
 /*---------------------------------------*/
$('a[href^="#"].inpage-scroll, .inpage-scroll a[href^="#"]').on('click', function (e) {
    e.preventDefault();

    var target = this.hash,
        $target = $(target);
    $('.main-navigation a[href="' + target + '"]').addClass('active');
    $('.main-navigation a:not([href="' + target + '"])').removeClass('active');
    $('html, body').stop().animate({
        'scrollTop': ($target.offset()) ? $target.offset().top : 0
    }, 900, 'swing', function () {
        window.location.hash = target;
    });
});


/* =================================
 ===  WOW ANIMATION             ====
 =================================== */

new WOW().init();

