function sayMyName(){
    console.log("Jatin")
}

// sayMyName()

// function addTwoNos(number1, number2){ // parameters
//     console.log(number1 + number2); // function body
// }

function addTwoNos(number1, number2){ 
    //  let result = number1 + number2;
    //  return result; // after return nothing will be executed
        return number1 + number2;
}

const result = addTwoNos(3, 4) // arguments

// console.log("result: ", result); // undefined


function loginUserMessage(username){
    if (username === undefined){// same as !username
        console.log("Please enter a username");  
    }
    return `${username} just logged in` // template string
}

// console.log(loginUserMessage("Jatin")); // function call
// console.log(loginUserMessage()); // undefined just logged in

function calculteCartPrice(...num1) {// rest operator
    return num1
}

console.log(calculteCartPrice(200, 300, 400, 500));

const user = {
    username:"Jatin",
    price: 300,
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user)
handleObject({
    username:"Rohan",
    price: 500,
})

const myNewArray = [200, 300, 400, 500]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));

