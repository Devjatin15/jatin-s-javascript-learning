 const user = {
    username: "Jatin",
    price: 300,
    
    welcomeMessage: function () {
        console.log(`${this.username}, welcome to the website`); // this refers to the current context
        console.log(this);
        
    }

 }

//  user.welcomeMessage()
//  user.username = "Rohan"
//  user.welcomeMessage()

// console.log(this); // in global context this refers to an empty object

// function chai() {
//     let username = "Jatin"
//     console.log(this.username); // undefined
// }
// chai()

// const chai = function () {
//     let username = "Jatin"
//     console.log(this.username); // undefined
// }
// chai()

// const chai = () => {
//     let username = "Jatin"
//     console.log(this); 
// }
// chai()

// const addTwo = (num1, num2) => { // explicit return
//     return num1 + num2
// }

// console.log(addTwo(3, 4));

// const addTwo = (num1, num2) => num1 + num2 // implicit return

// const addTwo = (num1, num2) => (num1 + num2) // implicit return with parentheses used highly in nodejs

const addTwo = (num1, num2) => ({ username: "Jatin" }) // implicit return with object

console.log(addTwo(3, 4));


// const myArray = [1, 2, 3, 4, 5]

// myArray.forEach()