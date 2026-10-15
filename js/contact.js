// Mostra l'indirizzo email solo al clic: nell'HTML è diviso in due parti
// (data-u e data-d), così i crawler che leggono solo il codice non lo trovano.
(function () {
  document.querySelectorAll('[data-mail]').forEach(function (box) {
    var btn = box.querySelector('.mail-btn');
    if (!btn) return;
    btn.addEventListener('click', function () {
      var addr = box.getAttribute('data-u') + '@' + box.getAttribute('data-d');
      var link = document.createElement('a');
      link.href = 'mailto:' + addr;
      link.textContent = addr;
      box.replaceChild(link, btn);
      link.focus();
    });
  });
})();
