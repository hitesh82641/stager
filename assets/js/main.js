
!(function($) {
  "use strict";

  // Header fixed and Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
      $('#header').addClass('header-fixed');
    } else {
      $('.back-to-top').fadeOut('slow');
      $('#header').removeClass('header-fixed');
    }
  });

 
  // Initiate superfish on nav menu
  $('.nav-menu').superfish({
    animation: {
      opacity: 'show'
    },
    speed: 400
  });

  // Mobile Navigation
  if ($('#nav-menu-container').length) {
    var $mobile_nav = $('#nav-menu-container').clone().prop({
      id: 'mobile-nav'
    });
    $mobile_nav.find('> ul').attr({
      'class': '',
      'id': ''
    });
    $('body').append($mobile_nav);
    $('body #header .container .d-flex').prepend('<button type="button" id="mobile-nav-toggle"><i class="fa fa-bars"></i></button>');
    $('body').append('<div id="mobile-body-overly"></div>');
    $('body').append('<button type="button" id="mobile-nav-toggle" class="close-menu"><i class="fa fa-times"></i></button>');
    $('#mobile-nav').find('.menu-has-children').prepend('<i class="fa fa-chevron-down"></i>');

    $(document).on('click', '.menu-has-children i', function(e) {
      $(this).next().toggleClass('menu-item-active');
      $(this).nextAll('ul').eq(0).slideToggle();
      $(this).toggleClass("fa-chevron-up fa-chevron-down");
    });

    $(document).on('click', '#mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      $('#mobile-body-overly').toggle();
    });

    $(document).click(function(e) {
      var container = $("#mobile-nav, #mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('#mobile-body-overly').fadeOut();
        }
      }
    });
  } else if ($("#mobile-nav, #mobile-nav-toggle").length) {
    $("#mobile-nav, #mobile-nav-toggle").hide();
  }
  

  // Init AOS
  function aos_init() {
    AOS.init({
      duration: 1000,
      once: true
    });
  }
  $(window).on('load', function() {
    aos_init();
  });

 if( $(".accordion").length){
     $('.accordion .acclink').click(function(){
      if ($(this).hasClass('active')) {
         $(this).removeClass('active');
         $(this).next().slideUp();
      } else {
        //if ($('body').hasClass('desktop')) {
         $('.accordion .acclink').removeClass('active');
         $('.accordion .accord-detail').slideUp();
        //}
         $(this).addClass('active');         
         $(this).next().slideDown();

      }
      return false;
     });
  }
  $(".accordion .acclink").click(function(){
     $(this).parent().toggleClass('accordionrow-active');
     $(this).parent().siblings().removeClass('accordionrow-active');
   });

  $('.hiar-key-slider').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    autoplay:true,
    autoplayTimeout:2500,
    smartSpeed:1500,
    center: true,
    dots:false,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
        },
       767:{
            items:3,
        },
        1000:{
            items:4,
          
        }
    }
  })


  $('.our-process-slider').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    autoplay:true,
    autoplayTimeout:2500,
    smartSpeed:1500,
    dots:false,
    nav:true,
    navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:1,
        },
       767:{
            items:2,
        },
        1000:{
            items:2,
          
        }
    }
  })



})(jQuery);