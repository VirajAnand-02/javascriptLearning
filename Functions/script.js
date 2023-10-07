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

const flight = 'LAKJ35135';
const Viraj = {
  name: 'Viraj Anand',
  passport: 6262176200,
};
const checkin = function (flightNum, Passenger) {
  Passenger.name = 'Mr.' + Passenger.name;
  if (Passenger.passport === 6262176200) {
    alert('Checkin!');
  } else {
    alert('wrong Passport !');
  }
};
const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000);
};

checkin(flight, Viraj);
console.log(flight);
console.log(Viraj);
