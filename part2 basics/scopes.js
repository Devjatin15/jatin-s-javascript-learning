// var c = 30
let a = 300 // global scope value
if (true) {
    let a = 10
    const b = 20 
    console.log("INNER: ", a); // value in block scope is different from global scope
}


// console.log(a);
// console.log(b);
// console.log(c); // var is not good to use for block scope

function one() { // parent scope
    const username = "Jatin"
    
    function two() { // child scope
        const website = "learncodeonline.in"
        console.log(username);
    }
    // console.log(website);

    two()
}

// one()

if (true) {
    const username = "Jatin"
    if (username === "Jatin") {
        const website = " learncodeonline.in"
        // console.log(username+website);
     }
    // console.log(website);
}

// console.log(username); 

// ++++++++++++++++ ineresrting ++++++++++++++++++++

console.log(addone(5)); // works due to function hoisting
  

function addone(num) { // function declaration
    return num + 1
}

// console.log(addTwo(5)); // does not work due to no function hoisting

const addTwo = function (num) { // function expression
    return num + 2
}


 
