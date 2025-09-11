// for of

// const arr = ['1', '2', '3', '4', '5'];

// for (const val of arr) {
//     console.log(val);
// }

const greetings = 'Hello World';

// for (const char of greetings) {
//     console.log(char);
//     if (char == ' ')
//         console.log(`space detected`);
//     continue
// }


// ----------------------- Maps -----------------------

const map = new Map();
map.set('IN', 'India');
map.set('US', 'United States'); 
map.set('FR', 'France');
map.set('DE', 'Germany');

// console.log(map);

for (const [key, value] of map) {
    console.log(key, ':', value);
}

const myObj = {
    'game1' : 'NFS',
    'game2' : 'FIFA',
    'game3' : 'AC',
    'game4' : 'GTA'
}

for (const [key, value] of myObj) {
    console.log(key, ':', value);   
} // TypeError: myObj is not iterable by this method
