"use strict"; // ES5

document.addEventListener("DOMContentLoaded", function() {
  (function() { //область видимости

    nojsreplace();
    function nojsreplace() {
      if (document.body.className == "no-js") {
        document.body.classList.remove("no-js");
      }
    };
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

    console.log("JS active");

  })();
});
