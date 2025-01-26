(function($) {


    // Cache jQuery Selector
    var $window = $(window),
        $header = $('header'),
        $sidenav = $('.nav-leftpush-overlay .navbar-expand-lg .navbar-slide-push'),
        $navigation = $('#main-navbar-content'),
        $dropdown = $('.dropdown-toggle'),
        $owl_carousel = $('.owl-carousel'),
        $autoplay_on = $('.autoplay-on'),
        $single_carousel = $('.single-carousel'),
        $two_item = $('.2block-carousel'),
        $three_item = $('.3block-carousel'),
        $four_item = $('.4block-carousel'),
        $five_item = $('.5block-carousel'),
        $single_product_gallery = $('.single-product-gallery'),
        $mix_tab = $('.mix-tab');


    //Parallax - START CODE
    if ($('.paraxify').length) {
        $(function() {
            $window.on("load resize scroll", function() {
                paraxify('.paraxify');
            });
        });
    }

    //Handel Preloader
    function handlePreloader() {
        if ($('.preloader').length) {
            $('.preloader').delay(500).fadeOut(500);
        }
    }


    // View Cart hover items toggle show hide
    if ($('[class*="header-cart-"]').has('.cart-popup')) {
        $('.has-cart-data').on('click', function(e) {
            e.preventDefault();
            if ($(this).parent('[class*="header-cart-"]').hasClass('show')) {
                $(this).parent('[class*="header-cart-"]').removeClass('show');
            } else {
                $(this).parent('[class*="header-cart-"]').addClass('show');
            }
            e.stopPropagation();
        });
        $(document).on('click', function(e) {
            var container = $('.cart-popup');
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                if ($('[class*="header-cart-"]').hasClass('show')) {
                    $('[class*="header-cart-"]').removeClass('show');
                }
            }
        });
    }

    // Click Search Icon and Open Search Field	
    var $srcicon = $('.search-pop .toggle-icon'),
        $srcfield = $('.search-form');
    $srcicon.on('click', function(event) {
        event.preventDefault();
        $srcfield.addClass('visible');
        event.stopPropagation();
    });

    $srcfield.on('click', function(event) {
        event.stopPropagation();
    });

    $window.on('click', function(e) {
        $srcfield.removeClass('visible');
    });

    // Auto active class adding with navigation
    $window.on('load', function() {
        var current = location.pathname;
        var $path = current.substring(current.lastIndexOf('/') + 1);
        $('#main-navbar-content li a, #sticky-navbar-content li a').each(function(e) {
            var $this = $(this);
            // if the current path is like this link, make it active
            if ($path == $this.attr('href')) {
                $this.parent('li').addClass('active');
            } else if ($path == '') {
                $('.navbar-nav li:first-child').addClass('active');
            }
        });

        handlePreloader();
    });



    // Update Header Style + Scroll to Top
    function headerStyle() {
        if ($header.length) {
            var windowpos = $window.scrollTop();
            if (windowpos >= 200) {
                $header.addClass('fixed-top');
            } else {
                $header.removeClass('fixed-top');
            }
        }
    }


    //Scroll top by clicking arrow up
    $window.scroll(function() {
        if ($(this).scrollTop() > 500) {
            $('#scroll').animate__fadeIn();
        } else {
            $('#scroll').fadeOut();
        }
    });
    $('#scroll').click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 100);
        return !1;
    });


    // Set banner space
    if (document.querySelector('.nav-on-banner') !== null) {
        var get_height = jQuery('.nav-on-banner').height();
        if (get_height > 0 && $window.width() > 991) {
            jQuery('.nav-on-banner').next().css('padding-top', get_height);
        }
        $window.on('resize', function() {
            $header.removeClass('fixed-top');
            var get_height = jQuery('.nav-on-banner').height();
            if ($window.width() < 991) {
                jQuery('.nav-on-banner').next('#page-banner').css('padding-top', '0');
            } else {
                jQuery('.nav-on-banner').next('#page-banner').css('padding-top', get_height);
            }
        });
    }


    // dropdown submenu on hover in desktopand dropdown sub menu on click in mobile 
    $navigation.each(function() {
        $dropdown.on('click', function(e) {
            if ($window.width() < 1100) {
                if ($(this).parent('.dropdown').hasClass('visible')) {
                    $(this).parent('.dropdown').children('.dropdown-menu').first().stop(true, true).slideUp(300);
                    $(this).parent('.dropdown').removeClass('visible');
                    //window.location = $(this).attr('href');
                } else {
                    e.preventDefault();
                    $(this).parent('.dropdown').siblings('.dropdown').children('.dropdown-menu').slideUp(300);
                    $(this).parent('.dropdown').siblings('.dropdown').removeClass('visible');
                    $(this).parent('.dropdown').children('.dropdown-menu').slideDown(300);
                    $(this).parent('.dropdown').addClass('visible');
                }
                e.stopPropagation();
            }
        });

        $('body').on('click', function(e) {
            $dropdown.parent('.dropdown').removeClass('visible');
        });

        $window.on('resize', function() {
            if ($window.width() > 991) {
                $('.dropdown-menu').removeAttr('style');
                $('.dropdown ').removeClass('visible');
            }
        });
    });


    // Slider push menu visible
    if (document.querySelector('.push-nav-toggle') !== null) {
        var $this = $('.push-nav-toggle'),
            $close = $('.slide-nav-close');


        $this.on('click', function(event) {
            event.preventDefault();
            $sidenav.addClass('visible');
            $('#page_wrapper').addClass('overlay');
            event.stopPropagation();
        });


        $sidenav.on('click', function(event) {
            event.stopPropagation();
        });

        $window.on('click', function(e) {
            $sidenav.removeClass('visible');
            $('#page_wrapper').removeClass('overlay');
        });

        $close.on('click', function(e) {
            $sidenav.removeClass('visible');
            $('#page_wrapper').removeClass('overlay');
        });

    }

    // Range Slider
    $(document).ready(function() {
        var rangeSlider = function() {
            var slider = $('.range-slider'),
                range = $('.range-slider__range'),
                value = $('.range-slider__value');

            slider.each(function() {

                value.each(function() {
                    var value = $(this).prev().attr('value');
                    $(this).html(value);
                });

                range.on('input', function() {
                    $(this).next(value).html(this.value);
                });
            });
        };

        rangeSlider();

    });

    // Widget toggle
    $(".widget-toggle .widget-title").on("click", function() {
        $(this).parent('.widget').toggleClass('closed');
    });

    // Widget list toggle
    $('.widget > ul > li > .has-child').on('click', function(e) {
        if ($(this).parent('li').hasClass('open')) {
            $(this).parent('li').removeClass('open');
            e.stopPropagation();
        } else {
            $(this).parent('li').addClass('open');
            e.stopPropagation();
        }
    });

    // Our Partner Logos Slider Auto
    if ($single_carousel.length) {
        $single_carousel.owlCarousel({
            loop: true,
            nav: true,
            dots: true,
            autoplay: false,
            smartSpeed: 500,
            navText: ["<div class='nav-btn prev-slide'><span class='icon prev-icon'></span><span class='text prev-text'></span></div>", "<div class='nav-btn next-slide'><span class='text next-text'></span><span class='icon next-icon'></span></div>"],
            responsive: {
                0: {
                    items: 1
                },
                1200: {
                    items: 1
                }
            }
        });
    }

    // Three Block Slide
    if ($two_item.length) {
        $two_item.owlCarousel({
            loop: true,
            nav: true,
            dots: true,
            autoplay: false,
            smartSpeed: 500,
            navText: ["<div class='nav-btn prev-slide'><span class='icon prev-icon'></span><span class='text prev-text'></span></div>", "<div class='nav-btn next-slide'><span class='text next-text'></span><span class='icon next-icon'></span></div>"],
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                600: {
                    items: 2
                }
            }
        });
    }

    // Three Block Slide
    if ($three_item.length) {
        $three_item.owlCarousel({
            loop: true,
            nav: true,
            dots: true,
            center: true,
            autoplay: false,
            smartSpeed: 500,
            navText: ["<div class='nav-btn prev-slide'><span class='icon prev-icon'></span><span class='text prev-text'></span></div>", "<div class='nav-btn next-slide'><span class='text next-text'></span><span class='icon next-icon'></span></div>"],
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                600: {
                    items: 2
                },
                800: {
                    items: 3
                },
                1200: {
                    items: 3
                }
            }
        });
    }

    // Four Block Slide
    if ($four_item.length) {
        $four_item.owlCarousel({
            loop: true,
            nav: true,
            dots: true,
            autoplay: false,
            smartSpeed: 500,
            navText: ["<div class='nav-btn prev-slide'><span class='icon prev-icon'></span><span class='text prev-text'></span></div>", "<div class='nav-btn next-slide'><span class='text next-text'></span><span class='icon next-icon'></span></div>"],
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                600: {
                    items: 2
                },
                800: {
                    items: 3
                },
                1200: {
                    items: 4
                }
            }
        });
    }

    // Four Block Slide
    if ($five_item.length) {
        $five_item.owlCarousel({
            loop: true,
            nav: true,
            dots: true,
            autoplay: false,
            smartSpeed: 500,
            navText: ["<div class='nav-btn prev-slide'><span class='icon prev-icon'></span><span class='text prev-text'></span></div>", "<div class='nav-btn next-slide'><span class='text next-text'></span><span class='icon next-icon'></span></div>"],
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                600: {
                    items: 2
                },
                800: {
                    items: 3
                },
                1200: {
                    items: 5
                }
            }
        });
    }

    // Five item slide
    if ($single_product_gallery.length) {
        $single_product_gallery.owlCarousel({
            loop: false,
            nav: true,
            navText: ["<div class='nav-btn prev-slide'><i class='fas fa-chevron-left'></i><span>Prev</span></div>", "<div class='nav-btn next-slide'><span>Next</span><i class='fas fa-chevron-right'></i></div>"],
            dots: true,
            smartSpeed: 500,
            autoplay: false,
            responsive: {
                0: {
                    items: 3
                },
                768: {
                    items: 4
                },
                1200: {
                    items: 5
                }
            }
        });
    }

    // owl carousel auto play on or off
    if ($owl_carousel.length) {
        if ($owl_carousel.has('.autoplay-on')) {
            $autoplay_on.trigger('play.owl.autoplay', [3000])
        }
    }


    // Fact Counter For Achivement Counting
    function factCounter() {
        if ($('.fact-counter').length) {
            $('.fact-counter .count.animated').each(function() {
                var $t = $(this),
                    n = $t.find(".count-num").attr("data-stop"),
                    r = parseInt($t.find(".count-num").attr("data-speed"), 10);

                if (!$t.hasClass("counted")) {
                    $t.addClass("counted");
                    $({
                        countNum: $t.find(".count-text").text()
                    }).animate({
                        countNum: n
                    }, {
                        duration: r,
                        easing: "linear",
                        step: function() {
                            $t.find(".count-num").text(Math.floor(this.countNum));
                        },
                        complete: function() {
                            $t.find(".count-num").text(this.countNum);
                        }
                    });
                }

                //set skill building height
                var size = $(this).children('.progress-bar').attr('aria-valuenow');
                $(this).children('.progress-bar').css('width', size + '%');

            });
        }
    }



    // Elements Animation
    if ($('.wow').length) {
        var wow = new WOW({
            boxClass: 'wow', // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset: 0, // distance to the element when triggering the animation (default is 0)
            mobile: true, // trigger animations on mobile devices (default is true)
            live: true // act on asynchronously loaded content (default is true)
        });
        wow.init();

    }

    // MixIt-up tab calling
    if ($mix_tab.length) {
        var containerEl = document.querySelector('.mix-element');
        var mixer = mixitup(containerEl);
    }
    // Start When document is Scrollig, do
    $(window).on('scroll', function() {
        factCounter();
        headerStyle();
    });


    $(".scene").each(function() {
        new Parallax($(this)[0], {
            relativeInput: !0
        })
    })

    if ($('#single-image-zoom').length) {
        //initiate the plugin and pass the id of the div containing gallery images
        $("#single-image-zoom").elevateZoom({
            gallery: 'gallery_01',
            zoomType: "inner",
            cursor: "crosshair",
            galleryActiveClass: 'active',
            imageCrossfade: true,
            loadingIcon: 'http://www.elevateweb.co.uk/spinner.gif'
        });

        //pass the images to Fancybox
        $("#single-image-zoom").on("bind click", function(e) {
            var ez = $('#single-image-zoom').data('elevateZoom');
            $.fancybox(ez.getGalleryList());
            return false;
        });

    }

})(jQuery);