"use strict"; // ES5

document.addEventListener("DOMContentLoaded", function() {
  (function() { //область видимости

    //js-status
    nojsreplace();
    function nojsreplace() {
      if (document.body.className == "no-js") {
        document.body.classList.remove("no-js");
      }
    }

    //menu-toggle
    mobileMenu();
    function mobileMenu() {
      var menuMain = document.querySelector(".menu"),
          menuToggle = document.querySelector(".menu__toggle");
      menuMain.classList.remove("menu--nojs");

      menuToggle.addEventListener("click", function() {
        if (menuMain.classList.contains("menu--closed")) {
          menuMain.classList.remove("menu--closed");
          menuMain.classList.add("menu--opened");
        } else {
          menuMain.classList.add("menu--closed");
          menuMain.classList.remove("menu--opened");
        }
      });
    }

    //circles skills
    circle();
    function circle() {
      $('.chart').easyPieChart({
        barColor:"#3498db",
        trackColor: "#f9f9f9",
        scaleColor: false,
        scaleLength: 3,
        lineWidth: 3,
        rotate: "-90",
        animate: ({
          duration: 2000,
          enabled: true
        })
      });
      //vanillaJS
      // var element = document.querySelectorAll('.chart');
      // var chart = new EasyPieChart(element, {
      //   barColor:"#3498db",
      //   trackColor: "#f9f9f9",
      //   scaleColor: false,
      //   scaleLength: 3,
      //   lineWidth: 3,
      //   size: 120,
      //   rotate: "-90",
      //   animate: ({
      //     duration: 2000,
      //     enabled: true,
      //     this.elem
      //   })
      // });
      // chart.enableAnimation();
    }

    //members slider
    members();
    function members() {
      var carousel = $('.members__list').owlCarousel({
        items: 4,
        loop: true,
        margin: 30,
        nav: true,
        navigation: true,
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
        autoplaySpeed: 2500,
        autoplayTimeout: 7000,
        navSpeed: 1000,
        smartSpeed: 1000,
        navigationText : ["",""],
        navContainerClass: ".members__arrows",
        responsiveClass: true,
        navText: "",
        responsive:{
          0: {
            items: 1,
            nav: false
          },
          650: {
            items: 2
          },
          992: {
            items: 3
          },
          1200: {
            items: 4,
            nav: true
          }
        }
      });
      $('.members__arrows-left').click(function(e) {
        e.preventDefault();
        carousel.trigger('prev.owl.carousel');
      });

      $('.members__arrows-right').click(function(e) {
        e.preventDefault();
        carousel.trigger('next.owl.carousel');
      });
    }

    //feedback slider;
    feedback();
    function feedback() {
      var feedbackSlider = $(".feedback__list").slick({
        infinite: true,
        dots: true,
        adaptiveHeight: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 2000,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 10000,
        lazyLoad: "progressive",
        prevArrow: ".feedback__block .feedback__arrow-prev",
        nextArrow: ".feedback__block .feedback__arrow-next"
      });
    }

    //brands slider
    brands();
    function brands() {
      var carousel = $('.brands__list').owlCarousel({
        items: 4,
        loop: true,
        margin: 30,
        nav: true,
        navigation: true,
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
        autoplaySpeed: 2500,
        autoplayTimeout: 7000,
        navSpeed: 1500,
        smartSpeed: 1500,
        navigationText : ["",""],
        navContainerClass: ".brands__arrows",
        responsiveClass: true,
        navText: "",
        responsive:{
          0: {
            items: 1,
            nav: false
          },
          650: {
            items: 2,
            nav: false
          },
          768: {
            items: 3,
            nav: false
          },
          992: {
            items: 4,
            nav: false
          },
          1200: {
            items: 4,
            nav: true
          }
        }
      });
      $('.brands__arrow-prev').click(function(e) {
        e.preventDefault();
        carousel.trigger('prev.owl.carousel');
      });

      $('.brands__arrows-next').click(function(e) {
        e.preventDefault();
        carousel.trigger('next.owl.carousel');
      });
    }

    //page map
    pageMap();
    function pageMap() {
      function initialize() {
        var mapOptions = {
          center: {lat: 40.71, lng: -74},
          zoom: 12,
          mapTypeId: google.maps.MapTypeId.TERRAIN,
          disableDefaultUI: false,
          scrollwheel: true,
          zoomControl: true,
          panControl: true,
          mapTypeControl: false,
          streetViewControl: false,
          overviewMapControl: true
        };
        var mapContainer = document.querySelector("#google-map");
        var map = new google.maps.Map(mapContainer, mapOptions);
        var image = new google.maps.MarkerImage('img/icons/icon-map-pin.svg',
         new google.maps.Size(36, 52),
         new google.maps.Point(0, 0)
        );
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng('40.711', '-74.007'),
          map: map,
          title: 'New York',
          icon: image
        });
      }
      google.maps.event.addDomListener(window, 'load', initialize);
    }

    //sendMessage
    // sendMessage();
    function sendMessage() {
      var form = document.querySelector("#contact-form");
      var formBtn = form.querySelector(".contact-form__btn");
      // form.addEventListener("submit", function(e) {
      formBtn.addEventListener("click", function(e) {
        e.preventDefault();
        var formData = new FormData(document.forms.formPage);
        // var form = $(this),
        //     formData = form.serialize();
            // console.log(form);
        $.ajax({
          url: "mail.php",
          type: "POST",
          // dataType: "json",
          data: formData,
          processData: false, //для формдаты
          contentType: false
          // success: function(data) {
          //   console.log("send success");
          //   var popup = data.status ? '#success-popup' : '#error-popup';
          //   $.fancybox.open([
          //     {href: popup}
          //   ], {
          //     type: 'inline',
          //     maxWidth: 300,
          //     fitToView: false,
          //     padding: 0,
          //     afterClose: function () {
          //       form.trigger('reset');
          //     }
          //   })
          // },
          // error: function(err) {
          //   console.log(err);
          // }
        }).done(function(data) {
          console.log(data);
        });
        console.log("22");
      });
      var popup = document.querySelector("#status-popup__close");
      popup.addEventListener("click", function(e) {
        e.preventDefault();
        console.log("11dd");
        $.fancybox.close();
      });
    }

    console.log("JS active");


  })();
});
