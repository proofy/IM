const app = document.getElementById("app");

function renderReady() {
  app.innerHTML = `
  <h2>Spieler ${state.currentPlayer + 1}</h2>
  <button onclick="reveal()">Aufdecken</button>
  `;
}

function reveal() {
  const a = state.assignments[state.currentPlayer];

  app.innerHTML = `
  <div class="card ${a.role}">
  <h2>${a.word}</h2>
  <img src="${a.image}">
  <p>${a.role === "im" ? "Du bist der IM" : "Du bist Normi"}</p>
  <button onclick="next()">Weiter</button>
  </div>
  `;
}

function next() {
  state.currentPlayer++;
  state.currentPlayer < state.assignments.length
  ? renderReady()
  : app.innerHTML = "<h2>Alle Rollen verteilt</h2>";
}
