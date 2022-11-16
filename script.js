'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

const btnCheck = document.querySelector('.check');
const message = document.querySelector('.message');
const btnAgain = document.querySelector('.again');

let score = 20;

console.log(secretNumber);

btnCheck.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    message.textContent = '😭 No number';
  } else if (guess === secretNumber) {
    message.textContent = '🥳 Yay! Correct number!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  } else if (guess < secretNumber) {
    if (score > 1) {
      message.textContent = '📈 Your number is too small!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      message.textContent = 'The game is over!';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      message.textContent = '📉 Your number is too big!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      message.textContent = 'The game is over!';
      document.querySelector('.score').textContent = 0;
      guess = '';
    }
  }
});

btnAgain.addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  message.textContent = 'Start guessing...';
  document.querySelector('.score').textContent = 20;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
});
