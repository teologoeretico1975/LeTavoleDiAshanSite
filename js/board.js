// Scacchiera 3x3 della home: otto tessere che compongono il monogramma "P".
// Parte a una mossa dal completamento, così il gesto è subito chiaro.
(function () {
  var board = document.getElementById('board');
  if (!board) return;

  var status = document.getElementById('board-status');
  var shuffleBtn = document.getElementById('board-shuffle');
  var SIZE = 3;
  var SOLVED = [1, 2, 3, 4, 5, 6, 7, 8, 0];
  var state = [1, 2, 3, 4, 5, 6, 7, 0, 8];
  var tiles = {};

  function say(key) {
    if (status) status.textContent = board.getAttribute('data-msg-' + key) || '';
  }

  // Celle tratteggiate sul fondo: mostrano dove sta la casella vuota.
  for (var i = 0; i < SIZE * SIZE; i++) {
    var cell = document.createElement('div');
    cell.className = 'cell';
    cell.style.left = (i % SIZE) * (100 / SIZE) + '%';
    cell.style.top = Math.floor(i / SIZE) * (100 / SIZE) + '%';
    cell.setAttribute('aria-hidden', 'true');
    board.appendChild(cell);
  }

  var label = board.getAttribute('data-tile-label') || 'Tile';
  for (var v = 1; v <= 8; v++) {
    var home = v - 1;
    var col = home % SIZE;
    var row = Math.floor(home / SIZE);
    var wrap = document.createElement('div');
    wrap.className = 'tile';
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.setAttribute('aria-label', label + ' ' + v);
    btn.innerHTML = '<svg viewBox="' + col * 100 + ' ' + row * 100 + ' 100 100" aria-hidden="true"><use href="#monogram"/></svg>';
    btn.addEventListener('click', makeHandler(v));
    wrap.appendChild(btn);
    board.appendChild(wrap);
    tiles[v] = wrap;
  }

  function makeHandler(value) {
    return function () {
      var at = state.indexOf(value);
      var blank = state.indexOf(0);
      var dist = Math.abs((at % SIZE) - (blank % SIZE)) + Math.abs(Math.floor(at / SIZE) - Math.floor(blank / SIZE));
      if (dist !== 1) return;
      state[blank] = value;
      state[at] = 0;
      render();
      if (isSolved()) {
        board.classList.add('solved');
        say('solved');
      } else {
        board.classList.remove('solved');
        say('play');
      }
    };
  }

  function isSolved() {
    for (var k = 0; k < state.length; k++) if (state[k] !== SOLVED[k]) return false;
    return true;
  }

  function render() {
    for (var k = 0; k < state.length; k++) {
      var value = state[k];
      if (!value) continue;
      tiles[value].style.setProperty('--c', k % SIZE);
      tiles[value].style.setProperty('--r', Math.floor(k / SIZE));
    }
  }

  function shuffle() {
    state = SOLVED.slice();
    var last = -1;
    for (var n = 0; n < 90; n++) {
      var blank = state.indexOf(0);
      var options = [];
      var r = Math.floor(blank / SIZE), c = blank % SIZE;
      if (r > 0) options.push(blank - SIZE);
      if (r < SIZE - 1) options.push(blank + SIZE);
      if (c > 0) options.push(blank - 1);
      if (c < SIZE - 1) options.push(blank + 1);
      options = options.filter(function (o) { return o !== last; });
      var pick = options[Math.floor(Math.random() * options.length)];
      state[blank] = state[pick];
      state[pick] = 0;
      last = blank;
    }
    if (isSolved()) { shuffle(); return; }
    board.classList.remove('solved');
    render();
    say('play');
  }

  if (shuffleBtn) shuffleBtn.addEventListener('click', shuffle);
  render();
  say('start');
})();
