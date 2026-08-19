/* EcoPack – front-end only demo script */
(function () {
  "use strict";

  // Mobile navigation
  var burger = document.getElementById("hamburger");
  var navLinks = document.getElementById("navLinks");
  if (burger && navLinks) {
    burger.addEventListener("click", function () {
      navLinks.classList.toggle("open");
      burger.classList.toggle("active");
    });
    navLinks.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        navLinks.classList.remove("open");
        burger.classList.remove("active");
      }
    });
  }

  // Smooth scrolling (fallback for browsers without CSS smooth scroll)
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (e) {
      var id = link.getAttribute("href");
      if (id.length < 2) return;
      var target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      var top = target.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: top, behavior: "smooth" });
    });
  });

  // Scroll reveal + counters + impact bars
  function animateCounter(el) {
    var target = parseFloat(el.getAttribute("data-target"));
    var decimals = parseInt(el.getAttribute("data-decimals") || "0", 10);
    var suffix = el.getAttribute("data-suffix") || "";
    var start = null;
    var duration = 1600;
    function step(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / duration, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      var value = target * eased;
      el.textContent = value.toLocaleString("en-US", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals
      }) + suffix;
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        el.classList.add("visible");
        el.querySelectorAll("[data-target]").forEach(animateCounter);
        el.querySelectorAll(".bar > i").forEach(function (bar) {
          bar.style.width = (bar.getAttribute("data-fill") || "70") + "%";
        });
        observer.unobserve(el);
      });
    },
    { threshold: 0.2 }
  );
  document.querySelectorAll(".reveal").forEach(function (el) {
    observer.observe(el);
  });

  // Return tracking demo (no backend)
  var form = document.getElementById("trackForm");
  var input = document.getElementById("returnId");
  var result = document.getElementById("trackResult");

  if (form && input && result) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var value = input.value.trim();
      result.classList.add("show");

      if (value === "") {
        result.classList.add("error");
        result.innerHTML = "<strong>Please enter a Return ID.</strong> Example: ECO-10245";
        return;
      }
      if (!/^[A-Za-z0-9-]{4,}$/.test(value)) {
        result.classList.add("error");
        result.innerHTML =
          "<strong>Invalid Return ID format.</strong> Use letters, numbers or dashes (min. 4 characters), e.g. ECO-10245";
        return;
      }

      result.classList.remove("error");
      result.innerHTML =
        "<strong>Return ID " +
        value.toUpperCase() +
        " found — Packaging return is currently being processed.</strong>" +
        '<ul class="track-steps">' +
        "<li>Return request received</li>" +
        "<li>Pickup scheduled with local partner</li>" +
        "<li>Packaging quality check in progress</li>" +
        "</ul>" +
        '<p class="demo-note" style="text-align:left;margin-top:10px">Front-end demonstration only — no data is stored or sent anywhere.</p>';
    });
  }

  // "Start a Return" buttons scroll to tracking section
  document.querySelectorAll("[data-start-return]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var section = document.getElementById("track");
      if (section) {
        window.scrollTo({
          top: section.getBoundingClientRect().top + window.pageYOffset - 80,
          behavior: "smooth"
        });
        if (input) setTimeout(function () { input.focus(); }, 600);
      }
    });
  });

  // Footer year
  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();
