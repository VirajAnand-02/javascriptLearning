"use strict";
let secreatNumber;
let highScore = 0;
function genNumber() {
  secreatNumber = Math.trunc(Math.random() * 20) + 1;
}
genNumber();
let score = Number(document.querySelector(".score").textContent);

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  // NO NUMBER
  if (!guess) {
    document.querySelector(".message").textContent = "⛔ NO Number !!!";
  }
  // CORRECT
  else if (guess === secreatNumber) {
    document.querySelector(".message").textContent = "🎉 Correct Number !!!";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30REM";
    document.querySelector(".number").textContent = secreatNumber;
  }
  //LOW
  else if (guess < secreatNumber) {
    document.querySelector(".message").textContent = "Your Guess is Lower";
    score--;
    document.querySelector(".score").textContent = score;
  }
  //HIGH
  else if (guess > secreatNumber) {
    document.querySelector(".message").textContent = "Your Guess is Higher";
    score--;
    document.querySelector(".score").textContent = score;
  }
});

// to reset the game
document.querySelector(".again").addEventListener("click", function () {
  if (score >= highScore) {
    highScore = score;
    document.querySelector(".highscore").textContent = highScore;
  }

  score = 20;
  document.querySelector(".score").textContent = score;
  genNumber();
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector(".number").style.width = "15REM";
  document.querySelector("body").style.backgroundColor = "#222";
});
