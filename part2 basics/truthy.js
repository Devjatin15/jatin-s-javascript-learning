const userEmail = "jk@gmail.com"

if (userEmail) { // checks for truthy value
    console.log("Got user email");
    
} else {
    console.log("User email not found");
}

const myArray = []

// falsy values :
// 1. false
// 2. 0
// 3. "" (empty string)
// 4. null
// 5. undefined
// 6. NaN
// 7. -0 (not commonly used)
// 8. BigInt 0n (not commonly used)

// truthy values :
// 1. true
// 2. any number (positive or negative) other than 0 and -0
// 3. any string (including "false", "0", " " (space))
// 4. any object (including empty object {})
// 5. any array (including empty array [])
// 6. any function (including empty function function() {})
// 7. BigInt any other than 0n (not commonly used)

// if (myArray.length === 0) { // for arrays
//     console.log("Array is empty");
// }

const emptyObj ={}

if (Object.keys(emptyObj).length === 0) { // for objects
    console.log("Object is empty");
    
}

// false == 0 // true
// false == '' // true
// 0 == '' // true

// Nullish Coalescing Operator (??) - returns the right-hand operand when the left-hand operand is null or undefined, otherwise returns the left-hand operand.

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10 
val1 = null?? 10 ?? 15 


console.log(val1);

//Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")