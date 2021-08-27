'use strict';
/*

console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = '🥳 Correct number'

document.querySelector('.number').textContent = 13;


document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);

*/

let secretNumber = Math.trunc(Math.random() * 20 + 1);
console.log(secretNumber);

let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(Number(document.querySelector('.guess').value));

  console.log(guess, typeof guess);

  // when there is no number
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number';

    // If the number is correct
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🥳 Correct number';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highScore) {
      document.querySelector('.highscore').textContent = score;
    }

    // if the num is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '☝ Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💢 Game Over';
      document.querySelector('.score').textContent = 0;
    }

    //If the number is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '👇 Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💢 Game Over';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function again() {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = 0;
  document.querySelector('.score').textContent = score;
});
