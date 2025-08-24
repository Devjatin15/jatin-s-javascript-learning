const score = 500
console.log(score);


const balance = new Number(100)
console.log(balance);

console.log(balance.toString());
console.log(balance.toFixed(5));

const otherNumber = 23.8966

console.log(otherNumber.toPrecision(5));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++++++++ MATHS +++++++++++++++++++++++++++++++++++++++++++


console.log(Math);
// abs changes negative values to positive
 console.log(Math.abs(-4));
 console.log(Math.ceil(4.2));
console.log(Math.floor(4.3));
console.log((Math.random()*10) + 1);

const min = 10
const max = 20

// this line of code gives us a number between 10-20 because of the last min we added else it will give values bw 0-10
console.log(Math.floor(Math.random() * (max - min + 1)) + min)









