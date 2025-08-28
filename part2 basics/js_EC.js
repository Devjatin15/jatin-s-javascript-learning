// JAVASCRIPT EXECUTION CONTEXT

// 1. Global Execution Context

// this 

// 2. Function Execution Context

// 3. Eval Execution Context

// Every Execution Context has two phases

// 1. (memory) Creation Phase // allocating memory

// all variables and functions are stored in memory
// let val1, val2 = undefined
// declared functions = entire function
// rsult1, result2 = undefined

// 2. (code) Execution Phase // code is executed line by line

// val1 = 10
// val2 = 5
// addnum creates new variable environment + execution thread
// after used it is destroyed




let val1 = 10
let val2 = 5
function addnum(num1, num2) {
    let total = num1 + num2
    return total
}
let result1 = addnum(val1, val2)
let result2 = addnum(10, 2)

// lifo - last in first out
// stack data structure

