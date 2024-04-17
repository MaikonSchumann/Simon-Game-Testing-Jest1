let game = {
  currentGame: [],
  playerMoves: [],
  score: 0,
  choices: ["button1", "button2", "button3", "button4"],
  turnNumber: 0,
};

function newGame() {
  game.currentGame = [];
  game.playerMoves = [];
  game.score = 0;
  showScore();
  addTurn();
}

function addTurn() {
    game.playerMoves = [];
    game.currentGame.push(game.choices[Math.floor(Math.random() * 4)]);
    showTurns();
};

function lightsOn(circ) {
    document.getElementById(circ).classList.add("light");
    setTimeout(function () {
        document.getElementById(circ).classList.remove("light");
    }, 400);
};

function showTurns() {
  game.turnNumber = 0;
  let tuns = setInterval(() => {
    lightsOn(game.currentGame[game.turnNumber]);
    game.turnNumber++;
    if (game.turnNumber >= game.currentGame.length) {
      clearInterval(tuns);
    }
  }, 800);
};

function showScore() {
    document.getElementById("score").innerText = game.score;
}

module.exports = { game, newGame, showScore, addTurn, lightsOn, showTurns };
