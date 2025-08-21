

let score = undefined
// value will be not a number(NaN) if 335drd or string

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

let isLoggedIn = "jatin"

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber + 23);
console.log(typeof stringNumber);

// ************************** Operations ****************

let value = 3
let negValue = -value
// console.log(negValue);

let str1 = "hello"
let str2 = " jatin"

let str3 = str1+str2
console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log(+true);

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
gameCounter++;

console.log(gameCounter);

/*
POSTFIX INCREMENT:

let x = 3;
const y = x++;
x is 4; y is 3
_________________________

PREFIX INCREMENT:

let x2 = 3n;
const y2 = x2++;
x2 is 4n; y2 is 3n
*/

// ________________________________________________

// Stack memory (Primitive), Heap memory (Non-Primitive)

// in stack memory we make changes in a copy not the real value

let myYoutubename = "jatinkee"

let anothername = myYoutubename
anothername = "jatinplays"

console.log(myYoutubename);
console.log(anothername);

// in heap memory the changes we make happen in the main reference value

let userOne = {
    email: "user@google.com",
    upi: "user@abc"
}

let userTwo = userOne

userTwo.email = "jatin@google.com"

console.log(userOne.email);
console.log(userTwo.email);




