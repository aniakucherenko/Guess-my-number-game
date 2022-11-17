'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
const btnCheck = document.querySelector('.check');
const btnAgain = document.querySelector('.again');

let score = 20;
let hightScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

btnCheck.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayMessage('😭 No number');
  } else if (guess === secretNumber) {
    displayMessage('🥳 Yay! Correct number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > hightScore) {
      hightScore = score;
      document.querySelector('.highscore').textContent = hightScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber
          ? '📉 Your number is too big!'
          : '📈 Your number is too small!'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('The game is over!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

btnAgain.addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = 20;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
});
