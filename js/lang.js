// Pagine bilingui (privacy, tester): mostra un solo blocco lingua alla volta.
(function () {
  var blocks = document.querySelectorAll('[data-lang-block]');
  var buttons = document.querySelectorAll('[data-set-lang]');
  if (!blocks.length) return;

  function setLang(lang) {
    blocks.forEach(function (b) { b.hidden = b.getAttribute('data-lang-block') !== lang; });
    buttons.forEach(function (btn) {
      var on = btn.getAttribute('data-set-lang') === lang;
      btn.setAttribute('aria-pressed', on ? 'true' : 'false');
    });
    document.documentElement.lang = lang;
  }

  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () { setLang(btn.getAttribute('data-set-lang')); });
  });

  var wanted = location.hash === '#en' ? 'en' : location.hash === '#it' ? 'it' : '';
  if (!wanted) {
    var nav = (navigator.language || 'it').toLowerCase();
    wanted = nav.indexOf('it') === 0 ? 'it' : 'en';
  }
  setLang(wanted);
})();
