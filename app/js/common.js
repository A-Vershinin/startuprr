"use strict"; // ES5

document.addEventListener("DOMContentLoaded", function() {
  (function() { //область видимости

    nojsreplace();
    function nojsreplace() {
      if (document.body.className == "no-js") {
        document.body.classList.remove("no-js");
      }
    }
    //menu
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
    // members();
    function members() {
      $(".members__list").owlCarousel({
        loop: true,
        items: 4,
        // itemElement: "members__item",
        // stageElement: "",
        // navContainer: "members__arrows",
        // stageElement:'members__list',
        // itemElement:'members__item',
        margin: 30,
        // center: true,
        nav: true,
        // navigation: true,
        dots: false,
        // autoplay: true,
        autoplaySpeed: 1700,
        navSpeed: 1700,
        responsive: {
          0: {
            items: 1,
            nav: true
          }
          // 600:{
          //   items:2
          // },
          // 1000:{
          //   items:3
          // }
        },
      });
    }


    console.log("JS active");


  })();
});
