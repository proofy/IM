let state = {
  currentPlayer: 0,
  assignments: [],
  numPlayers: 0,
  selectedPair: null
};

function init() {
  renderStart();
}

function renderStart() {
  const app = document.getElementById("app");
  app.innerHTML = `
    <div class="screen">
      <h1>Inoffizieller Mitspieler</h1>
      <p>Ein Wort kann dich verraten</p>
      <label for="players">Anzahl Spieler (3-8):</label>
      <input type="number" id="players" min="3" max="8" value="${state.numPlayers || 4}">
      <br>
      <button onclick="startNewGame()">Spiel starten</button>
    </div>
  `;
}

function startNewGame() {
  const numPlayers = parseInt(document.getElementById('players').value);

  if (numPlayers < 3 || numPlayers > 8) {
    alert('Ungültige Eingabe');
    return;
  }

  // Zufälliges Wortpaar auswählen
  const randomIndex = Math.floor(Math.random() * PAIRS.length);
  const pair = PAIRS[randomIndex];

  state.numPlayers = numPlayers;
  state.selectedPair = pair;

  // Zuweisung erstellen
  const assignments = [];
  const numIm = numPlayers <= 5 ? 1 : 2;
  const imIndices = [];
  while (imIndices.length < numIm) {
    const idx = Math.floor(Math.random() * numPlayers);
    if (!imIndices.includes(idx)) imIndices.push(idx);
  }

  for (let i = 0; i < numPlayers; i++) {
    const isIm = imIndices.includes(i);
    assignments.push({
      word: isIm ? pair.b.word : pair.a.word,
      image: `assets/icons/${isIm ? pair.b.image : pair.a.image}`,
      role: isIm ? 'im' : 'normi'
    });
  }

  // Shuffle assignments für Zufall
  for (let i = assignments.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [assignments[i], assignments[j]] = [assignments[j], assignments[i]];
  }

  startGame(assignments);
}

function startGame(assignments) {
  state.currentPlayer = 0;
  state.assignments = assignments;
  reveal(); // Direkt zum ersten Reveal gehen
}

init();
