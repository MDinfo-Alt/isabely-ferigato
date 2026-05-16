/* ============================================
   MODELO ELEGANTE — script.js
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {

  /* ---- Nav scroll shadow ---- */
  var nav = document.querySelector('nav');
  window.addEventListener('scroll', function () {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });

  /* ---- Mobile nav toggle ---- */
  var toggle = document.querySelector('.nav-toggle');
  var links  = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
    });
  }
  document.querySelectorAll('.nav-links a').forEach(function (a) {
    a.addEventListener('click', function () {
      if (links) links.classList.remove('open');
    });
  });

  /* ---- Reveal on scroll ---- */
  var items = document.querySelectorAll('.reveal');

  function check () {
    var h = window.innerHeight;
    items.forEach(function (el) {
      if (el.getBoundingClientRect().top < h - 60) {
        el.classList.add('visible');
      }
    });
  }

  window.addEventListener('scroll', check, { passive: true });
  check();

  /* ---- Lightbox ---- */
  var lb      = document.getElementById('lightbox');
  var lbClose = document.getElementById('lightbox-close');

  document.querySelectorAll('.g-item').forEach(function (item) {
    item.addEventListener('click', function () {
      if (lb) {
        lb.classList.add('open');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  function closeLB () {
    if (lb) { lb.classList.remove('open'); document.body.style.overflow = ''; }
  }

  if (lbClose) lbClose.addEventListener('click', closeLB);
  if (lb) lb.addEventListener('click', function (e) { if (e.target === lb) closeLB(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeLB(); });

});
