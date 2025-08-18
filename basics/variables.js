const accountId = 144553
// const means doesnt changes
let accountEmail = "jatin@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"

// accountId = 2 // not allowed

accountEmail = "hc@hc.com"
accountPassword = "122333"
accountCity = "Delhi"

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity]);

