'use strict';

const message = document.querySelector('.message');
// Generating Random Secret number
let secretNum = Math.floor(Math.random() * 20) + 1;
let score = 20;
//Highscore Number
let highscore = 0;

const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

const displayNumber = number => {
  document.querySelector('.number').textContent = number;
};

const displayScore = score => {
  document.querySelector('.score').textContent = score;
};

//Check button handler function
const checkBtn = document
  .querySelector('.check')
  .addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    //Guessing all scenarios in game.
    //Guessing if player num is no num, equal to secretNum, too high or too low

    if (!guess) {
      displayMessage('Please enter a number!');
    } else if (guess === secretNum) {
      //When Player Wins
      displayMessage('Yay! You guessed correctly!');
      const chicken = document.querySelector('.chicken');
      chicken.style.display = 'block';
      document.querySelector('.wrapper').style.backgroundColor = '#FE4567';
      document.querySelector('.number').style.width = '30rem';
      displayNumber(secretNum);

      //Highscore Content
      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }

      //When player guesses too high or too low
    } else if (guess !== secretNum) {
      if (score > 1) {
        displayMessage(
          guess > secretNum ? 'Number is too high!' : 'Number is too low!'
        );
        //Decreasing the score by 1 when guess is incorrect
        score -= 1;
        displayScore(score);
      } else {
        displayMessage('Game Over!!');
        displayScore(0);
      }
    }
  });

//Reset button - Play Again
const playAgainBtn = document
  .querySelector('.again')
  .addEventListener('click', function () {
    score = 20;
    secretNum = Math.floor(Math.random() * 20) + 1;

    displayMessage('Start guessing...');
    displayScore(score);
    displayNumber('?');
    document.querySelector('.guess').value = '';
    document.querySelector('.wrapper').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.chicken').style.display = 'none';
  });
