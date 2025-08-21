const name = "jatin"
const repoCount = "2"

// console.log(name + repoCount);

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('www-jatin-jk-com')

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.indexOf('j'));

const newString = gameName.substring(0, 6)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   jatin   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://jatin.com/jatin%20kumar"

console.log(url.replace('%20', '-'));

console.log(url.includes('hitesh'));

console.log(gameName.split('-'));
