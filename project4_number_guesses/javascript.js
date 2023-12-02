let randomNumber = parseInt(Math.random() * 100 + 1);

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

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('PLease enter a valid number');
  } else if (guess < 1) {
    alert('PLease enter a number more than 1');
  } else if (guess > 100) {
    alert('PLease enter a  number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  }else if (  randomNumber <= 50 && randomNumber > 40) {
    displayMessage(`from 41 to 50`)
  }
 else if ( randomNumber <= 40 && randomNumber > 30) {
    displayMessage(`from 31 to 40`)
  }
  else if ( randomNumber <= 30 && randomNumber > 20) {
    displayMessage(`from 21 to 30`)
  }
  else if ( randomNumber <= 20 && randomNumber >=10) {
    displayMessage(`11 to 20`);
  }
  else if ( randomNumber <= 10 && randomNumber >= 1) {
    displayMessage(`from 1 to 10`);
  }
 else if ( randomNumber >= 51 && randomNumber <60) {
  displayMessage(`from 51 to 59`)}
 else if ( randomNumber >= 60 && randomNumber <= 69) {
    displayMessage(`from 60 to 69`)
  }
  else if ( randomNumber >= 70 && randomNumber <= 79) {
    displayMessage(`from 70 to 79`)
  }
  else if ( randomNumber >= 80 && randomNumber <= 89) {
    displayMessage(`from 80 to 89`)
  }
  else if ( randomNumber >= 90 && randomNumber <= 100) {
    displayMessage(`from 90 to 100`)
  }
  }






function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}