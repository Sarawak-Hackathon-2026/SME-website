/* =========================================================
   My Little House — motion.js
   Scroll reveals, hero entrance, count-up stats, sticky-nav
   condense. Everything here is opt-in: if the visitor has
   asked their OS for reduced motion, we skip straight to the
   finished state and add no animation.
   ========================================================= */
(function () {
  "use strict";

  var reduce = window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var root = document.documentElement;

  // ---- Tag elements that should reveal on scroll -------------------
  var revealSelectors = [
    ".section-head",
    ".info-strip",
    ".carousel",
    ".faq details",
    ".hero-actions",
    ".day-schedule",
    ".fee-note",
    "main > section > .container > p.lead",
    "main > section > .container > h2"
  ];

  function tagReveals() {
    document.querySelectorAll(revealSelectors.join(",")).forEach(function (el) {
      el.classList.add("reveal");
    });
    // Grids, the stats band and photo rows: stagger their children
    document.querySelectorAll(".grid, .stats, .photo-strip, .kids-strip").forEach(function (group) {
      Array.prototype.forEach.call(group.children, function (child, i) {
        child.classList.add("reveal");
        child.style.setProperty("--reveal-delay", Math.min(i * 70, 280) + "ms");
      });
    });
    // Hero text: cascade in on load
    var heroText = document.querySelector(".hero-text");
    if (heroText) {
      Array.prototype.forEach.call(heroText.children, function (child, i) {
        child.classList.add("reveal");
        child.style.setProperty("--reveal-delay", (i * 90) + "ms");
      });
    }
    var heroLogo = document.querySelector(".hero-visual-logo");
    if (heroLogo) heroLogo.classList.add("reveal-logo");
  }

  // ---- Count-up ---------------------------------------------------
  function countUp(el) {
    var target = parseFloat(el.getAttribute("data-count"));
    if (isNaN(target)) return;
    var dur = 1400, start = null;
    function step(ts) {
      if (start === null) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased).toString();
      if (p < 1) requestAnimationFrame(step);
      else el.textContent = target.toString();
    }
    requestAnimationFrame(step);
  }

  function finishCounts() {
    document.querySelectorAll("[data-count]").forEach(function (el) {
      el.textContent = el.getAttribute("data-count");
    });
  }

  function revealAllNow() {
    document.querySelectorAll(".reveal, .reveal-logo").forEach(function (el) {
      el.classList.add("in");
    });
    finishCounts();
  }

  // ---- Sticky nav condense --------------------------------------
  function initNavScroll() {
    var header = document.querySelector(".site-header");
    if (!header) return;
    var ticking = false;
    function update() {
      header.classList.toggle("scrolled", window.scrollY > 30);
      ticking = false;
    }
    window.addEventListener("scroll", function () {
      if (!ticking) { requestAnimationFrame(update); ticking = true; }
    }, { passive: true });
    update();
  }

  // ---- Carousel: gentle autoplay -------------------------------
  function initCarouselAutoplay() {
    document.querySelectorAll(".carousel").forEach(function (car) {
      var next = car.querySelector(".carousel-btn.next");
      if (!next) return;
      var timer = null;
      function play() { stop(); timer = setInterval(function () { next.click(); }, 5500); }
      function stop() { if (timer) { clearInterval(timer); timer = null; } }
      car.addEventListener("mouseenter", stop);
      car.addEventListener("mouseleave", play);
      car.addEventListener("focusin", stop);
      car.addEventListener("touchstart", stop, { passive: true });
      play();
    });
  }

  // ---- Boot ----------------------------------------------------
  function boot() {
    initNavScroll();

    if (reduce) {
      finishCounts();
      return; // no reveals, no autoplay, no float
    }

    root.classList.add("js-motion");
    tagReveals();
    initCarouselAutoplay();

    // Background tab / prerender / crawler: don't animate, just show it.
    if (document.visibilityState === "hidden") { revealAllNow(); return; }

    var reveals = document.querySelectorAll(".reveal, .reveal-logo");

    if (!("IntersectionObserver" in window)) {
      revealAllNow();
      return;
    }

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        el.classList.add("in");
        if (el.querySelectorAll) el.querySelectorAll("[data-count]").forEach(countUp);
        if (el.matches("[data-count]")) countUp(el);
        io.unobserve(el);
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.05 });

    reveals.forEach(function (el) { io.observe(el); });

    // Failsafe: if nothing has revealed shortly after load, the observer
    // isn't firing in this environment — show everything so content is
    // never stuck hidden.
    setTimeout(function () {
      if (document.querySelectorAll(".reveal.in, .reveal-logo.in").length === 0) {
        revealAllNow();
      }
    }, 1300);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
