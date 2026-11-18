/* Marvellous Udoko — Portfolio scripts (vanilla JS, no dependencies) */
(function () {
  'use strict';

  document.documentElement.classList.add('js');

  // ---------- Dynamic copyright year ----------
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  // ---------- Mobile menu ----------
  var toggle = document.getElementById('menuToggle');
  var nav = document.getElementById('siteNav');

  function setMenu(open) {
    if (!toggle || !nav) return;
    nav.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      setMenu(toggle.getAttribute('aria-expanded') !== 'true');
    });
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { setMenu(false); });
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') { setMenu(false); toggle.focus(); }
    });
    window.addEventListener('resize', function () {
      if (window.innerWidth > 860) setMenu(false);
    });
  }

  // ---------- Missing image fallbacks (logo, photo, screenshots) ----------
  function watchImage(img, wrapperSelector) {
    var wrap = img.closest(wrapperSelector);
    if (!wrap) return;
    function fail() { wrap.classList.add('is-missing'); }
    if (img.complete && img.naturalWidth === 0) fail();
    img.addEventListener('error', fail);
  }
  document.querySelectorAll('.logo-wrap img').forEach(function (i) { watchImage(i, '.logo-wrap'); });
  document.querySelectorAll('.photo-frame img').forEach(function (i) { watchImage(i, '.photo-frame'); });
  document.querySelectorAll('.shot img').forEach(function (i) { watchImage(i, '.shot'); });

  // ---------- Section reveal ----------
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('visible'); });
  }

  // ---------- Active nav link on scroll ----------
  var links = document.querySelectorAll('.site-nav a');
  var sections = [];
  links.forEach(function (a) {
    var s = document.querySelector(a.getAttribute('href'));
    if (s) sections.push({ link: a, section: s });
  });

  if ('IntersectionObserver' in window && sections.length) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          links.forEach(function (l) { l.classList.remove('active'); });
          sections.forEach(function (p) {
            if (p.section === entry.target) p.link.classList.add('active');
          });
        }
      });
    }, { rootMargin: '-40% 0px -55% 0px' });
    sections.forEach(function (p) { spy.observe(p.section); });
  }
})();
