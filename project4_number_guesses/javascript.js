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
  }

   else if (  randomNumber <= 50 && randomNumber > 40) {
      displayMessage(`Number is 50 or less than 50 but greater than 40`)
    }
   else if ( randomNumber <= 40 && randomNumber > 30) {
      displayMessage(`Number is 40 or less than 40 but greater than 30`)
    }
    else if ( randomNumber <= 30 && randomNumber > 20) {
      displayMessage(`Number is 30 or less than 30 but greater than 20`)
    }
    else if ( randomNumber <= 20 && randomNumber >=10) {
      displayMessage(`Number is 20 or less than 10 but greater than 00`);
    }
    else if ( randomNumber <= 10 && randomNumber >= 1) {
      displayMessage(`Number is 10 or less than 10 but greater than 00`);
    }
   else if ( randomNumber >= 51 && randomNumber <60) {
    displayMessage(`Number is greater than 50 but less than 60`)}
   else if ( randomNumber >= 60 && randomNumber <= 69) {
      displayMessage(`Number is 60 or  greater than 60 but less than 70`)
    }
    else if ( randomNumber >= 70 && randomNumber <= 79) {
      displayMessage(`Number is 70 or greater than 70 but less than 80`)
    }
    else if ( randomNumber >= 80 && randomNumber <= 89) {
      displayMessage(`Number is 80 or  greater than 80 but less than 90`)
    }
    else if ( randomNumber >= 90 && randomNumber <= 100) {
      displayMessage(`Number is 90 or greater than 90 but less than 100`)
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