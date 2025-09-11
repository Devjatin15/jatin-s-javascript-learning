const coding = ['JavaScript', 'Python', 'C++', 'Java', 'Go'];

// coding.forEach( function (item) {
//     console.log(item);
    
// });

// coding.forEach(  (val) => {
    // console.log(val);
    
// });

// function printMe(item){
//     console.log(item);
    
// }

// coding.forEach(printMe)

// coding.forEach(  (item, index, array) => {
//     console.log(item, index, array);
    
// })

const myCoding = [
    {
        languageName: 'JavaScript',
        languageFileName: 'js'
    },
    {
        languageName: 'python',
        languageFileName: 'py'
    },
    {
        languageName: 'Java',
        languageFileName: 'java'
    }
]

myCoding.forEach(  (val) => {
    console.log(val.languageName);
    
})