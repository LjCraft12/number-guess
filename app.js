// Game values
let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3,
    winningMessage = `Congrats ${winningNum} was the correct number`,
    wrongGuess = 'Nope that wasn\'t the number try again.',
    outOfBoundsGuess = `Please enter a number between ${min} and ${max}`,
    gameOver = 'Game over you lost ';

// UI Elements
const game = document.querySelector('#game');
const minNum = document.querySelector('.min-num');
const maxNum = document.querySelector('.max-num');
const guessBtn = document.querySelector('#guess-btn');
const guessInput = document.querySelector('#guess-input');
const message = document.querySelector('.paragraph-message');

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Play again event listener
game.addEventListener('mousedown', function (e) {
    if(e.target.className === 'play-again') {
        window.location.reload();
    }
});

// Listen for guess
guessBtn.addEventListener('click', function () {
    let guess = parseInt((guessInput.value));

//    Validate Input
    if (isNaN(guess) || guess < min || guess > max) {
        setMessage(outOfBoundsGuess, 'red');
    }

//    Check if won
    if(guess === winningNum) {
    gameOverFun(true, winningMessage)
    } else {
    //    Wrong number
        guessesLeft -= 1

        if(guessesLeft === 0 ) {
        //     Game over lost
      gameOverFun(false, gameOver + ' ' + `the winning number was ${winningNum}`, 'red')
        } else {
        //    Game continues answer was wrong
            if(guessesLeft > 1) {
                setMessage(wrongGuess + ` You have ${guessesLeft} guesses left`, 'orange');
            guessInput.value = '';
            } else {
                setMessage(wrongGuess + ` You have ${guessesLeft} guess left`, 'yellow');
                guessInput.value = '';
            }
        }
    }
});

// Game over
function gameOverFun(won, msg) {
    let color;
    won === true ? color = 'green' : color = 'red'
    guessInput.disabled = true;
    //    Change the border color
    guessInput.style.borderColor = 'green';
    // Set text color
    message.style.color = color;
    // Set message
    setMessage(msg, 'green');
// Play again
    guessBtn.value = 'Play again';
    guessBtn.className += 'play-again';
}

// Create winning number
function getRandomNum(min, max) {
   return Math.floor(Math.random()*(max - min + 1) + min);
}

function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}

console.log(winningNum);
