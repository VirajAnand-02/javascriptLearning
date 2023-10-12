'use strict';
// const bookings = [];
// // in es6 we can set default value in funct decleration with any expression
// // we can also set it to any param declared before
// const createBooking = function(flightNum, numPassenger=1, price=199*numPassenger){
//     // ES 5
//     // numPassenger = numPassenger || 1;// default value by shortcircircuiting
//     // price = price || 199;

//     const booking = {
//         flightNum,
//         numPassenger,
//         price
//     }
//     console.log(booking);
//     bookings.push(booking);
// }

// createBooking('lh123')
// createBooking('lmao', 1, 52)
//--------------------------------------
// const flight = 'LAKJ35135';
// const Viraj = {
//   name: 'Viraj Anand',
//   passport: 6262176200,
// };
// const checkin = function (flightNum, Passenger) {
//   Passenger.name = 'Mr.' + Passenger.name;
//   if (Passenger.passport === 6262176200) {
//     alert('Checkin!');
//   } else {
//     alert('wrong Passport !');
//   }
// };
// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 1000000000);
// };

// checkin(flight, Viraj);
// console.log(flight);
// console.log(Viraj);


// ----------------------------------------------------
// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase(); // '/{string tot replace}/g => regular expression
// };

// const upperFirstWord = function (str) {
//   const [first, ...other] = str.split(' ');
//   return [first.toUpperCase, ...other].join(' ');
// };

// // higher order function
// const transform = function (str, fn) {};

// transform('Js is the best', upperFirstWord);

//---------------------------------------------------
// function returning function
const greet = function(greeting){
  return function(name){
    console.log(`${greeting}, ${name}`);
  }
}

const GreetHey = greet('Hello');// this function call will return a function which will be assigned to GreatHey
// now we can use it as a normal function
GreetHey('Viraj') // we get the previous input, 'hello', with help of closoures in Js

// we can also chain , ie call a returning function on the function call 
greet('Hemlo')('whayever yor name is');// this is used in functional programming

// converting all to arrow function

const greetArrow = greeting =>  (name) => console.log(`${greeting}, ${name}`); 
// we dont need () i only 1 arg, and no {} , return keyword if single line.
//--------------------------------------------------------------------------------------



