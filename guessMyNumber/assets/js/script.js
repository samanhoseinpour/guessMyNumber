'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const numberInbox = function (number) {
  document.querySelector('.number').textContent = number;
};

const scoreBox = function (score) {
  document.querySelector('.score').textContent = score;
};

// Again button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing ...');
  numberInbox('?');
  scoreBox(score);
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
});

// Check button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input
  if (!guess) {
    displayMessage('⛔️ No number!');

    // When guess is correct
  } else if (guess === secretNumber) {
    displayMessage('🥳 You win!');
    numberInbox(secretNumber);
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    // Record the highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high.' : '📉 Too low.');
      document.querySelector('body').style.backgroundColor = '#222';
      score--;
      scoreBox(score);
    } else {
      document.querySelector('body').style.backgroundColor = '#782222';
      displayMessage('❌ Game over!');
      scoreBox(0);
    }
  }
});
