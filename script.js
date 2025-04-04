const secretWord = 'pumpkin';
let attempts = 5;
let gameOver = false;

function initGame() {
  console.log(`(For testing) Secret word: ${secretWord}`);
  document.getElementById('message').innerText = '';
  document.body.className = '';
  attempts = 5;
  gameOver = false;
  document.getElementById('guessInput').value = '';
}

function submitGuess() {
  if (gameOver) return;

  let input = document.getElementById('guessInput').value.trim().toLowerCase();

  if (!input) {
    attempts--;
    updateMessage("Incorrect guess. You have " + attempts + " attempts left. Try again!");
  } else if (input === secretWord) {
    updateMessage("Congratulations! You guessed the secret word!");
    document.body.className = 'win';
    gameOver = true;
  } else {
    attempts--;
    if (attempts > 0) {
      updateMessage("Incorrect guess. You have " + attempts + " attempts left. Try again!");
    } else {
      updateMessage("Game over! The secret word was '" + secretWord + "'.");
      document.body.className = 'lose';
      gameOver = true;
    }
  }

  document.getElementById('guessInput').value = '';
}

function updateMessage(msg) {
  document.getElementById('message').innerText = msg;
}

function restartGame() {
  initGame();
}

window.onload = initGame;
document.getElementById('guessInput').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    submitGuess();
  }
});

