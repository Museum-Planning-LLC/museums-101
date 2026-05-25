(function () {
  document.querySelectorAll('.mp-masthead').forEach(function (header) {
    var btn = header.querySelector('.mp-nav-toggle');
    var menu = header.querySelector('.mp-masthead-menu');
    if (!btn || !menu) return;

    function closeMenu() {
      header.classList.remove('mp-nav-open');
      btn.setAttribute('aria-expanded', 'false');
      btn.setAttribute('aria-label', 'Open menu');
    }

    btn.addEventListener('click', function () {
      var open = header.classList.toggle('mp-nav-open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });

    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') closeMenu();
    });
  });
})();
