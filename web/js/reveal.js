const app = document.getElementById("app");

function renderReady() {
  app.innerHTML = `
    <div class="screen">
      <h2>Spieler ${state.currentPlayer + 1} von ${state.numPlayers}</h2>
      <p>Reiche das Gerät weiter und decke dein Wort auf.</p>
      <button onclick="reveal()">Aufdecken</button>
    </div>
  `;
}

function reveal() {
  const assignment = state.assignments[state.currentPlayer];

  app.innerHTML = `
    <div class="card ${assignment.role}">
      <h2>${assignment.word}</h2>
      <img src="${assignment.image}" alt="Icon">
      <p class="role">${assignment.role === "im" ? "Du bist der Inoffizielle Mitspieler (IM)" : "Du bist ein normaler Mitspieler"}</p>
      <button onclick="next()">Weiter</button>
    </div>
  `;
}

function next() {
  state.currentPlayer++;
  if (state.currentPlayer < state.assignments.length) {
    renderReady();
  } else {
    renderDiscussionStart();
  }
}

function renderDiscussionStart() {
  app.innerHTML = `
    <div class="screen">
      <h2>Alle Rollen verteilt!</h2>
      <p>Lege das Gerät ab und beginnt die Diskussion. Wer ist der IM?</p>
      <button onclick="startTimer()">Timer starten (2 Minuten)</button>
    </div>
  `;
}

function startTimer() {
  let timeLeft = 120; // 2 Minuten
  const timerElement = document.createElement('div');
  timerElement.className = 'timer';
  timerElement.innerHTML = `<h2>Diskussion: ${Math.floor(timeLeft / 60)}:${(timeLeft % 60).toString().padStart(2, '0')}</h2>`;
  app.innerHTML = '';
  app.appendChild(timerElement);

  const interval = setInterval(() => {
    timeLeft--;
    timerElement.innerHTML = `<h2>Diskussion: ${Math.floor(timeLeft / 60)}:${(timeLeft % 60).toString().padStart(2, '0')}</h2>`;
    if (timeLeft <= 0) {
      clearInterval(interval);
      renderVote();
    }
  }, 1000);
}

function renderVote() {
  const options = [];
  for (let i = 1; i <= state.numPlayers; i++) {
    options.push(`<button onclick="vote(${i})">Spieler ${i}</button>`);
  }
  app.innerHTML = `
    <div class="screen">
      <h2>Zeit ist um! Wer ist der IM?</h2>
      <div class="vote-options">
        ${options.join('')}
      </div>
    </div>
  `;
}

function vote(chosenPlayer) {
  // Finde den tatsächlichen IM
  const imIndex = state.assignments.findIndex(a => a.role === 'im');
  const actualIm = imIndex + 1; // 1-based
  const isCorrect = chosenPlayer === actualIm;

  const pair = state.selectedPair;
  const message = isCorrect ? 'Der IM wurde aufgedeckt!' : 'IM hat gewonnen!';
  const borderColor = isCorrect ? 'green' : 'red';

  app.innerHTML = `
    <div class="screen result" style="border: 4px solid ${borderColor}; padding: 20px;">
      <h2>${message}</h2>
      <p>Wortpaar: ${pair.a.word} / ${pair.b.word}</p>
      <p>Der IM war Spieler ${actualIm} mit dem Wort "${state.assignments[imIndex].word}".</p>
      <button onclick="init()">Neues Spiel</button>
    </div>
  `;
}
