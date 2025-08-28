// Immediately Invoked Function Expression (IIFE)

// because of global scope pollution we use IIFE to avoid it

(function chai() {
    // named iife
    console.log(`DB CONNECTED`);
})(); // IIFE

( (name) => {
    // anonymous iife
    console.log(`DB CONNECTED TWO ${name}`);
})('Jatin') // IIFE with arrow function