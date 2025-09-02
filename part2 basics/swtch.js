// switch (key) { 
//     case value:
        
//         break;

//     default:
//         break;
// } 

const month = 3;

switch (month) { // shift + alt + down key to duplicate line
    case 1:
        console.log("january");
        break;
    case 2:
        console.log("february");
        break;
    case 3:
        console.log("march");
        break;
    case 4: 
        console.log("april");
        break;

    default:
        console.log("no month found");
        break;
} // if there is no break statement it will execute all the cases after the matched case but not the default case 