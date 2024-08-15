document.addEventListener("DOMContentLoaded", function () {
    if (window.innerWidth > 991) {
      setTimeout(function () {
        animatedCursor();
      }, 1000);
    }
  
    function animatedCursor() {
      if (document.getElementById("aimated-cursor")) {
        var e = { x: 0, y: 0 },
          t = { x: 0, y: 0 },
          n = 0.25,
          o = false,
          a = document.getElementById("cursor"),
          i = document.getElementById("cursor-loader");
  
        TweenLite.set(a, { xPercent: -50, yPercent: -50 });
        document.addEventListener("mousemove", function (t) {
          var n = window.pageYOffset || document.documentElement.scrollTop;
          e.x = t.pageX;
          e.y = t.pageY - n;
        });
  
        TweenLite.ticker.addEventListener("tick", function () {
          if (!o) {
            t.x += (e.x - t.x) * n;
            t.y += (e.y - t.y) * n;
            TweenLite.set(a, { x: t.x, y: t.y });
          }
        });
  
        // .animated-wrap mouse enter and leave events
        document.querySelectorAll(".animated-wrap").forEach(function (wrap) {
          wrap.addEventListener("mouseenter", function () {
            TweenMax.to(wrap, 0.3, { scale: 1.5 });
            TweenMax.to(a, 0.3, { scale: 2, borderWidth: "1px", opacity: 0.2 });
            TweenMax.to(i, 0.3, { scale: 2, borderWidth: "1px", top: 1, left: 1 });
            TweenMax.to(wrap.children, 0.3, { scale: 0.7 });
            o = true;
          });
  
          wrap.addEventListener("mouseleave", function () {
            TweenMax.to(wrap, 0.3, { scale: 1 });
            TweenMax.to(a, 0.3, { scale: 1, borderWidth: "2px", opacity: 1 });
            TweenMax.to(i, 0.3, { scale: 1, borderWidth: "2px", top: 0, left: 0 });
            TweenMax.to(wrap.children, 0.3, { scale: 1, x: 0, y: 0 });
            o = false;
          });
  
          wrap.addEventListener("mousemove", function (e) {
            var i = wrap.getBoundingClientRect(),
              l = e.pageX - i.left,
              r = e.pageY - i.top,
              d = window.pageYOffset || document.documentElement.scrollTop;
            t.x = i.left + i.width / 2 + (l - i.width / 2) / 2;
            t.y = i.top + i.height / 2 + (r - i.height / 2 - d) / 2;
            TweenMax.to(a, 0.3, { x: t.x, y: t.y });
  
            var h = wrap.querySelector(".animated-element"),
              x = 20,
              u = wrap.getBoundingClientRect(),
              w = e.pageX - u.left,
              f = e.pageY - u.top,
              m = window.pageYOffset || document.documentElement.scrollTop;
            TweenMax.to(h, 0.3, {
              x: ((w - u.width / 2) / u.width) * x,
              y: ((f - u.height / 2 - m) / u.height) * x,
              ease: Power2.easeOut,
            });
          });
        });
  
        // .hide-cursor, .btn, .tp-bullets mouse enter and leave events
        document.querySelectorAll(".hide-cursor, .btn, .tp-bullets").forEach(function (elem) {
          elem.addEventListener("mouseenter", function () {
            TweenMax.to("#cursor", 0.2, { borderWidth: "1px", scale: 2, opacity: 0 });
          });
  
          elem.addEventListener("mouseleave", function () {
            TweenMax.to("#cursor", 0.3, { borderWidth: "2px", scale: 1, opacity: 1 });
          });
        });
  
        // .link, #pp-nav li, .counter, .showcase-counter span mouse enter and leave events
        document.querySelectorAll(".link, #pp-nav li, .counter, .showcase-counter span").forEach(function (elem) {
          elem.addEventListener("mouseenter", function () {
            TweenMax.to("#cursor", 0.2, {
              borderWidth: "0px",
              scale: 3,
              backgroundColor: "rgba(255,242,255,0.4)",
              opacity: 0.15,
            });
          });
  
          elem.addEventListener("mouseleave", function () {
            TweenMax.to("#cursor", 0.3, {
              borderWidth: "2px",
              scale: 1,
              backgroundColor: "rgba(208, 5, 32, 0)",
              opacity: 1,
            });
          });
        });
      }
    }
  });
  