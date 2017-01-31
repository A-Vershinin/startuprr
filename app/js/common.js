"use strict"; // ES5

document.addEventListener("DOMContentLoaded", function() {
  (function() { //область видимости

    nojsreplace();
    function nojsreplace() {
      if (document.body.className == "no-js") {
        document.body.classList.remove("no-js");
      }
    };


    console.log("JS active");

  })();
});
