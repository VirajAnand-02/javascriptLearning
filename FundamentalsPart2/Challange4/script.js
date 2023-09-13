"use strict";
const calcTip = (billValue) => {
  // can also use ternary operator
  if (billValue >= 50 && billValue <= 300) return billValue * 0.15;
  else return billValue * 0.2;
};
const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];
for (let i = 0; i < bills.length; i++) {
  // tips[i]=calcTip(bills[i]);
  tips.push(calcTip(bills[i]));
  totals[i] = bills[i] + tips[i];
}

console.log(bills);
console.log(tips);
console.log(totals);
console.log(calcAverage(totals));
