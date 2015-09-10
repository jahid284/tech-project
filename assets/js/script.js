jQuery(function($) {
    'use strict';


    // -------------------------------------------------------------
    // PrettyPhoto
    // -------------------------------------------------------------
    (function() {
        jQuery("a[data-gal^='prettyPhoto']").prettyPhoto();
    }());


    //-------------------------------------------------------
    //offcanvus
    //-----------------------------------------------------------

    $('button.navbar-toggle').HippoOffCanvasMenu({
        documentWrapper: '#main-wrapper',
        contentWrapper: '.content-wrapper',
        position: 'hippo-offcanvas-left', // class name
        // opener         : 'st-menu-open',            // class name
        effect: 'slide-in-on-top', // class name
        closeButton: '#off-canvas-close-btn',
        menuWrapper: '.offcanvas-menu', // class name below-pusher
        documentPusher: '.offcanvas-pusher'
    });



    // -------------------------------------------------------------
    // Sticky Menu
    // -------------------------------------------------------------

    (function() {
        var nav = $('.navbar');
        var scrolled = false;

        $(window).scroll(function() {

            if (110 < $(window).scrollTop() && !scrolled) {
                nav.addClass('sticky animated fadeInDown').animate({
                    'margin-top': '0px'
                });

                scrolled = true;
            }

            if (110 > $(window).scrollTop() && scrolled) {
                nav.removeClass('sticky animated fadeInDown').css('margin-top', '0px');

                scrolled = false;
            }
        });

    }());





    // -------------------------------------------------------------
    // dropdown hover
    // -------------------------------------------------------------
    (function() {
        $(".dropdown").hover(
            function() {
                $('.dropdown-menu', this).stop(true, true).fadeIn("fast");
                $(this).toggleClass('open');
            },
            function() {
                $('.dropdown-menu', this).stop(true, true).fadeOut("fast");
                $(this).toggleClass('open');
            }
        );
    }());


    $(document).on('mouseenter', '#main-nav a[data-toggle="tab"]', function() {
        $(this).tab('show');
    });





    // -------------------------------------------------------------
    // FlickrStream
    // -------------------------------------------------------------
    (function() {

        if ($('#flickr').length > 0) {

            $('#flickr').jflickrfeed({
                limit: 12,
                qstrings: {
                    id: '52617155@N08'
                },
                itemTemplate: '<li>' +
                    '<a rel="prettyPhoto[pp_gal]" href="{{image}}" title="{{title}}">' +
                    '<img src="{{image_s}}" alt="{{title}}" />' +
                    '</a>' +
                    '</li>'
            }, function(data) {
                $('#flickr a').prettyPhoto();
            });
        }

    }());



    (function() {

        $(".mega-menu-slider").owlCarousel({
            autoPlay: 3000, //Set AutoPlay to 3 seconds
            pagination: false,
            items: 4,
            itemsDesktop: [1199, 4],
            itemsDesktopSmall: [979, 3]
        });


        // Custom Navigation Events
        $(".mega-menu-slider-nav .next").click(function() {
            $(".mega-menu-slider").trigger('owl.next');
        })
        $(".mega-menu-slider-nav .prev").click(function() {
            $(".mega-menu-slider").trigger('owl.prev');
        })


    }());
    
    
}); // JQuery end


