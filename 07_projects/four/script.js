// Generate random number
let randomNumber = parseInt(Math.random() * 100 + 1);
console.log(randomNumber);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;
let playGame = true;

// Start game
if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();

    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

// Validate user input
function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please enter a valid number');
  } else if (guess < 1) {
    alert('Please enter a number greater than 0');
  } else if (guess > 100) {
    alert('Please enter a number less than or equal to 100');
  } else {
    prevGuess.push(guess);

    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over! Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

// Compare guess with random number
function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage('🎉 You guessed it right!');
    endGame();
  } else if (guess < randomNumber) {
    displayMessage('📉 Number is TOO LOW');
  } else {
    displayMessage('📈 Number is TOO HIGH');
  }
}

// Display previous guesses
function displayGuess(guess) {
  userInput.value = '';

  guessSlot.innerHTML += `${guess} `;
  numGuess++;

  remaining.innerHTML = `${11 - numGuess}`;
}

// Display hint message
function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

// End game
function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');

  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;

  startOver.appendChild(p);

  playGame = false;

  newGame();
}

// Restart game
function newGame() {
  const newGameButton = document.querySelector('#newGame');

  newGameButton.addEventListener('click', function () {
    randomNumber = parseInt(Math.random() * 100 + 1);
    console.log(randomNumber);

    prevGuess = [];
    numGuess = 1;

    guessSlot.innerHTML = '';
    remaining.innerHTML = '10';
    lowOrHi.innerHTML = '';

    userInput.removeAttribute('disabled');
    userInput.value = '';

    startOver.removeChild(p);

    playGame = true;
  });
}