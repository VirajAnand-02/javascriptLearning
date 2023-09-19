'use strict';
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0 = document.querySelector('#current--0');
const current1 = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');

const roll = document.querySelector('.btn--roll');
const hold = document.querySelector('.btn--hold');
const reset = document.querySelector('.btn--new');

let currentScore = 0;
let rngDice;

const score = [0, 0];
let activePlayer = 0;
let playing = true;

score0El.textContent = '0';
score1El.textContent = '0';
diceEl.classList.add('hidden');

function switchPlayer() {
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--active');
  activePlayer = activePlayer === 0 ? 1 : 0;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add('player--active');
}

function playerWin() {
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add('player--winner');
  playing = false;
}

roll.addEventListener('click', function () {
  if (playing) {
    diceEl.classList.remove('hidden');
    rngDice = Math.trunc(Math.random() * 6) + 1;
    diceEl.src = `dice-${rngDice}.png`;

    if (rngDice === 1) {
      currentScore = 0;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
      // Switch Player
      switchPlayer();
    } else {
      // add dice roll to current
      currentScore += rngDice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    }
  }
});

hold.addEventListener('click', function () {
  if (playing) {
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
    score[activePlayer] = score[activePlayer] + currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      score[activePlayer];
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
    if (score[activePlayer] > 100) {
      // Current Player Wins
      console.log(`Player ${activePlayer + 1} Wins`);
      playerWin();
    } else {
      // Switch Players and change active region
      switchPlayer();
    }
  }
});

reset.addEventListener('click', function () {
  score[0] = 0;
  score[1] = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;
  currentScore = 0;
  current0.textContent = currentScore;
  current1.textContent = currentScore;
  diceEl.classList.add('hidden');
  //Set player 1 as current
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');
  activePlayer = 1;
  switchPlayer();
  playing = true;
});
