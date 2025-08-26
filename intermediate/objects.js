// singleton
// Object.create

// object literals

const mySym = Symbol("key1");

const JsUser = {
    [mySym]: "mykey1",
    name: "Jatin",
    age: 20,
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Friday"],
}

// console.log(JsUser["name"]);
// console.log(JsUser.age);
// console.log(JsUser[mySym]); 

JsUser.age = 21
// Object.freeze(JsUser) // freeze the object, no changes allowed
// console.log(JsUser);

JsUser.greeting = function() {
    console.log("Hello JsUser");
}
JsUser.greetingTwo = function() {
    console.log(`Hello JsUser, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());