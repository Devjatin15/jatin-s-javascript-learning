// if
const isUserLoggedIn = true;
const temperature = 30;

// if (temperature === 34) {
//   console.log("less than 25");   
// } else {
//     console.log("temperature is greater than 25")
// }

// console.log("execute");


// <, >, <=, >=, ==, ===, !=, !==
// === strict equality operator to check both value and type
// !== strict not equal operator to check both value and type



// const score = 400;

// if (score > 200) {
//     const power = "fly";
//     console.log(`user power: ${power}`);
// }

// console.log(`user power: ${power}`); // error because power is block scoped


// const balance = 1000;

// if (balance > 500) console.log("test"); // implicit block

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
// }else {    
//     console.log("less than 1200");
// }
 
const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoggedIn && debitCard) { // both conditions should be true
    console.log("you can make a purchase");
}

if (loggedInFromGoogle || loggedInFromEmail) { // at least one condition should be true
    console.log("user logged in");
} 