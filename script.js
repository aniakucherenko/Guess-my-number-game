'use strict';

// let secretNumber = Math.trunc(Math.random() * 20) + 1;
// const btnCheck = document.querySelector('.check');
// const btnAgain = document.querySelector('.again');

// let score = 20;
// let hightScore = 0;

// const displayMessage = function (message) {
//   document.querySelector('.message').textContent = message;
// };

// btnCheck.addEventListener('click', function () {
//   const guess = Number(document.querySelector('.guess').value);
//   if (!guess) {
//     displayMessage('😭 No number');
//   } else if (guess === secretNumber) {
//     displayMessage('🥳 Yay! Correct number!');
//     document.querySelector('.number').textContent = secretNumber;
//     document.querySelector('body').style.backgroundColor = '#60b347';
//     document.querySelector('.number').style.width = '30rem';

//     if (score > hightScore) {
//       hightScore = score;
//       document.querySelector('.highscore').textContent = hightScore;
//     }
//   } else if (guess !== secretNumber) {
//     if (score > 1) {
//       displayMessage(
//         guess > secretNumber
//           ? '📉 Your number is too big!'
//           : '📈 Your number is too small!'
//       );
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       displayMessage('The game is over!');
//       document.querySelector('.score').textContent = 0;
//     }
//   }
// });

// btnAgain.addEventListener('click', function () {
//   secretNumber = Math.trunc(Math.random() * 20) + 1;
//   displayMessage('Start guessing...');
//   document.querySelector('.score').textContent = 20;
//   document.querySelector('.guess').value = '';
//   document.querySelector('body').style.backgroundColor = '#222';
//   document.querySelector('.number').style.width = '15rem';
//   document.querySelector('.number').textContent = '?';
// });

console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Start guessing';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let number = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('🤨 No number!');
  } else if (guess === number) {
    displayMessage('😍 Correct number!');
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '300px';
    document.querySelector('.number').textContent = number;

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== number) {
    if (score > 1) {
      displayMessage(guess > number ? 'Too high!' : 'Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  let number = Math.trunc(Math.random() * 20 + 1);

  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';

  document.querySelector('body').style.backgroundColor = 'black';
  document.querySelector('.number').style.width = '15rem';
});
