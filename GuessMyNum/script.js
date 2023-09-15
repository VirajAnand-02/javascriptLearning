"use strict";
// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "🎉 Correct Number !!!";
// // console.log(document.querySelector(".message").textContent);
// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 10;
// document.querySelector(".guess").value = 12;
// console.log(document.querySelector(".guess").value);
const secreatNumber = Math.trunc(Math.random() * 20) + 1;

document.querySelector(".number").textContent = secreatNumber;
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);
  if (!guess) {
    document.querySelector(".message").textContent = "⛔ NO Number !!!";
  } else if (guess === secreatNumber) {
    document.querySelector(".message").textContent = "🎉 Correct Number !!!";
  } else if (guess < secreatNumber) {
    document.querySelector(".message").textContent = "Your Guess is Lower";
  } else if (guess > secreatNumber) {
    document.querySelector(".message").textContent = "Your Guess is Higher";
  }
});
