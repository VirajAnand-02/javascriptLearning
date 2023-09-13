'use strict';
const calcTip = billValue => {// can also use ternary operator
    if(billValue >= 50 && billValue <= 300)
        return billValue*0.15;
    else
        return billValue*0.2;
}

console.log(`Bill value - 100. Tip value - ${calcTip(100)}`)

const bills = new Array(125, 555, 44);
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]];

console.log(bills);
console.log(tips);
console.log(total);