'use strict';
const score0El = document.querySelector('#score--0');
let score0 = 0;
const score1El = document.getElementById('score--1');
let score1 = 0;
const diceEl = document.querySelector('.dice');
const roll = document.querySelector('.btn--roll');
const hold = document.querySelector('.btn--hold');
const reset = document.querySelector('.btn--new');
const current0 = document.querySelector('#current--0');
let currentScore0 = Number(current0.textContent);
const current1 = document.getElementById('current--1');
let currentScore1 = Number(current1.textContent);
let rngDice;

let currentPlayer = 0;

score0El.textContent = '0';
score1El.textContent = '0';
diceEl.classList.add('hidden');

roll.addEventListener('click', function () {
  diceEl.classList.remove('hidden');
  rngDice = Math.trunc(Math.random() * 6) + 1;
  diceEl.src = `dice-${rngDice}.png`;
  if (rngDice === 1) {
    currentScore0 = 0;
    current0.textContent = currentScore0;
    // Switch Player
  } else {
    // add dice roll to current
    currentScore0 += rngDice;
    current0.textContent = currentScore0;
  }
});

hold.addEventListener('click', function () {
  score0 = score0 + currentScore0;
  score0El.textContent = score0;
  currentScore0 = 0;
  current0.textContent = currentScore0;
  if (score0 > 100) {
    // Current Player Wins
    console.log('Current Player Wins');
  } else {
    // Switch Players
  }
});

reset.addEventListener('click', function () {
  score0 = 0;
  score1 = 0;
  score0El.textContent = score0;
  score1El.textContent = score1;
  currentScore0 = 0;
  currentScore1 = 0;
  current0.textContent = currentScore0;
  current1.textContent = currentScore1;
  diceEl.classList.add('hidden');
  //Set player 1 as current
});
