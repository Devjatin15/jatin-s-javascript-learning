const myObject = {
    js: 'JavaScript',
    py: 'Python',
    rb: 'Ruby'
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
    
}

const programming = ['js', 'py', 'rb', 'java', 'c', 'cpp'];
   
for (const key in programming) {
    // console.log(programming[key]);
}

// const map = new Map();
// map.set('IN', 'India');
// map.set('US', 'United States'); 
// map.set('FR', 'France');
// map.set('DE', 'Germany');

// for (const key in map) {
//     console.log(map[key]);
// } // nothing will be printed as map is not iterable by this method


