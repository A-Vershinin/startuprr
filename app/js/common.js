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
        size: 120,
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

    // members(); //slider
    function members() {
      var memberOwl = $(".members__list").owlCarousel({
        loop: true,
        items: 2,
        itemElement: "members__item",
        navContainer: "members__arrows",
        // stageElement:'members__list',
        margin: 30,
        nav: true,
        dots: false,
        // autoplay: true,
        autoplaySpeed: 1700,
        navSpeed: 1700,
        responsive: {
          // 0: {
          //   items: 1,
          //   nav: true
          // }
          // 750:{
          //   items:2
          // },
          // 1200:{
          //   items:3
          // }
        }
      });

      $('.members__arrows-right').on('click', function (e) {
        e.preventDefault();
        memberOwl.trigger('next.owl.carousel');
      });

      $('.members__arrows-left').on('click', function (e) {
        e.preventDefault();
        memberOwl.trigger('prev.owl.carousel');
      });
    }

    // feedback slider;
    feedback();
    function feedback() {
      var feedbackSlider = $(".feedback__list").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 3000,
        arrows: true,
        autoplay: true,
        autoplay: 3000,
        autoplaySpeed: 7000,
        adaptiveHeight: true,
        lazyLoad: "progressive",
        appendArrows: ".feedback__arrows",
        prevArrow: "feedback__arrow-prev",
        // prevArrow: '<button class="feedback__arrow-prev"><button>',
        nextArrow: "feedback__arrow-next"
        // nextArrow: '<button class="feedback__arrow-next"><button>'
      });

      // $(".feedback__arrow-prev").on("click", function(e) {
      // $(".feedback__arrow-prev").slick("slickNext()");

        // feedbackSlider.slickNext;

      // $(".feedback__arrow-next").on("click", function(e) {
      //   e.preventDefault();
      //   console.log("next");
      //   feedbackSlider.slickPrev();
      // });
    }

    // brands();
    function brands() {
      var brandsOwl = $(".brands__list").owlCarousel({
        loop: true,
        items: 4,
        itemElement: "brands__item",
        nav: true,
        margin: 30
      });

      $('.brands__arrows-next').on('click', function (e) {
        e.preventDefault();
        memberOwl.trigger('next.owl.carousel');
      });

      $('.brands__arrow-prev').on('click', function (e) {
        e.preventDefault();
        memberOwl.trigger('prev.owl.carousel');
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
