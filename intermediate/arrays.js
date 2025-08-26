// array

const myArr = [0, 1, 2, 3, 4, 5,]
const myHerores = ['spiderman', 'ironman', 'thor', 'hulk', 'captain america']

const myArr2 = new Array(1, 2, 3, 4, 5)
// console.log(myArr[1]);

// Array Methods

// myArr.push(6) // add to the end
// myArr.pop() // remove from the end

// myArr.unshift(-1)// add to the beginning
// myArr.shift() // remove from the beginning

// console.log(myArr.includes(8));
// console.log(myArr.indexOf(8));

// const newArr = myArr.join()

// console.log(myArr);
// console.log(typeof newArr); // string

// slice, splice

console.log("A ", myArr);
const myn1 = myArr.slice(1, 3) // does not modify the original array

console.log(myn1);
console.log("B ", myArr);

// splice modifies the original array and takes out the elements from the original array
const myn2 = myArr.splice(1, 3) // modifies the original array
console.log("C ", myArr);

console.log(myn2);




