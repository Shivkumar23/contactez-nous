(function ($) {
    'use strict';


    /*------------------------------------------------------------------
        Banner-slider
    -------------------------------------------------------------------*/


    $(document).ready(function () {

        // Banner Slider Script Start
        // Client Logo Slider Script Start

        $('.logo-carousel').owlCarousel({
            margin: 0,
            loop: true,
            dots: false,
            nav: true,
            autoplay: true,
            autoplayTimeout: 2000,
            autoplayHoverPause: false,
            navText: ["<img src='./assets/images/blue-left-arrow.png'>", "<img src='./assets/images/blue-right-arrow.png'>"],

            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                768: {
                    items: 3
                },
                1000: {
                    items: 5
                }
            }
        })

        // Client Logo Slider Script End
        // AOS.init();

        $(window).on("load", function () {
            $(".Preloader").addClass("loaded");
        });

    });

})(jQuery);