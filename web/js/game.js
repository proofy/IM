let state = {
  currentPlayer: 0,
  assignments: []
};

function startGame(assignments) {
  state.currentPlayer = 0;
  state.assignments = assignments;
  renderReady();
}
