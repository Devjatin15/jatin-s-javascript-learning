// for

for (let i = 0; i < 10 ; i++) {
    const element = i;
    if (element === 5) {
        // console.log("5 is the best number");
        
    }
    // console.log(element);
}


for (let i = 1; i <= 10; i++) {
    // console.log(`outer loop value: ${i}`);
    
   for (let j = 1; j <= 10; j++) {
    // console.log(`inner loop value: ${j} and inner loop ${i}`);
    // console.log(i + '*' + j + ' = ' + (i*j));
    
   }
}
let myArr = ["flash", "batman", "superman"]


for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    // console.log(element);
    
}


// break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index === 5) {
//         console.log(`Detected 5`);
//         break
//     }
//     console.log(`value of i is: ${index}`);
    
// }

for (let index = 1; index <= 20; index++) {
    if (index === 5) {
        console.log(`Detected 5`);
        continue // ignore the checking for 5 and move to next iteration
    }
    console.log(`value of i is: ${index}`);
    
}

// no index++ means infinite loop

// console.log(element); // dont have access to element variable here































/*
in for loop first we declare a variable name index and assign it a value of 0
then we check the condition if index is less than araay.length taken
if the condition is true then we execute the code inside the block
then we increment the value of index by 1
this process continues until the condition becomes false
*/

