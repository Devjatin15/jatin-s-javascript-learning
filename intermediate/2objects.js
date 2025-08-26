const tinderUser = new Object()

tinderUser.id = "123abc"
tinderUser.name = "Jatin"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "jatin@gmail.com",
    fullname: {
        userFullname: {
            firstName: "Jatin",
            lastName: "Singh"
        }
    }
}

// console.log(regularUser.fullname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

const obj3 = Object.assign({}, obj1, obj2) // merging objects
console.log(obj3);


