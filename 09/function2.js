// # 🟡 Level 2 – Functional Thinking & Logic Tasks (Intermediate)
// const prompt = require("prompt-sync")();
// 1. Write a higher-order function `runTwice(fn)` that takes another function and executes it two times.
function callbackfunction(){
    console.log("Run me twice");
}
function runTwice(fn){
     console.log('I am higher order function')
    fn();
    fn();
}
runTwice(callbackfunction);

// 2. Create one pure function that always returns the same output for a given input, and one impure function using a global variable.
// Pure function: adds 5 to the given number
function addFive(num) {
    return num + 5;
}

console.log(addFive(10)); // 15
console.log(addFive(10)); // 15 (always same output for same input)

let counter = 0; // global variable

// Impure function: increments the global counter
function incrementCounter() {
    counter += 1;
    return counter;
}

console.log(incrementCounter()); // 1
console.log(incrementCounter()); // 2 (different output for same "input")
console.log(incrementCounter()); // 3

// 3. Write a function that uses object destructuring inside parameters to extract and print `name` and `age`.
let person = {
    name: 'lowXenergy',
    age: 99,
    city: 'Earth',
    contact: {
        email: 'lowx@energy.com',
        phoneNo:'12345234134'
    }
};

function greet({name="Unknown",city="Unknown",...rest}){
    console.log(`Hello ${name} from ${city}`);
    console.log(rest);
    
}
greet(person)

function contact({contact:{email,phoneNo}}){
    console.log(`Your email is ${email} and phoneNo is ${phoneNo}`);
}
contact(person)

// 4. Demonstrate the difference between normal function and arrow function when used as object methods (the `this` issue).
const person1 = {
    name: "lowXenergy",
    age: 99,
    // Normal function
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

person1.greet(); 
// Output: Hello, my name is lowXenergy
// 'this' refers to person1

const person3 = {
    name: "lowXenergy",
    hobbies: ["Reading", "Coding"],
    // Method using arrow function inside forEach
    showHobbies: function() {
        this.hobbies.forEach(hobby => {
            console.log(`${this.name} likes ${hobby}`);
        });
    }
};

person3.showHobbies(); 
// Output:
// lowXenergy likes Reading
// lowXenergy likes Coding
// Arrow function inherits 'this' from surrounding method

person3.showHobbies();

// 5. Given an array of numbers, use `map()` to create a new array where each number is squared.

const numbers = [1, 2, 3, 4, 5];
// Using map to square each number
const squaredNumbers = numbers.map(num => num * num);
console.log(squaredNumbers);

// 6. Use `filter()` to get only even numbers from an array.
const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Using filter to get even numbers
const evenNumbers = numbers1.filter(num => num % 2 === 0);
console.log(evenNumbers); 

// 7. Use `reduce()` to find the total salary from an array of numbers `[1000, 2000, 3000]`.
const salaries = [1000, 2000, 3000];

// Using reduce to sum all salaries
const totalSalary = salaries.reduce((accumulator, current) => accumulator + current, 0);
console.log(totalSalary); 

// 8. Create an array of names and use `some()` and `every()` to test a condition (e.g., all names longer than 3 chars).
const names = ["Ankit", "Raj", "Mia"];
// Check if **some** names are longer than 3 characters
const someLongNames = names.some(name => name.length > 3);
console.log(someLongNames); 
// Check if **every** name is longer than 3 characters
const allLongNames = names.every(name => name.length > 3);
console.log(allLongNames); 

// 9. Create an object `user` and test the behavior of `Object.freeze()` and `Object.seal()` by adding/changing keys.
const user = {
    name: "lowXenergy",
    age: 99
};
// Freeze the object
Object.freeze(user);

// Try to change a property
user.name = "Ankit"; 
console.log(user.name); // Output cannot change

// Try to add a new property
user.city = "Earth"; 
console.log(user.city); // Output: undefined (cannot add)

// Try to delete a property
delete user.age;
console.log(user.age); // Output: Cannot delete

const user2 = {
    name: "Raj",
    age: 25
};

// Seal the object
Object.seal(user2);

// Try to change a property
user2.name = "Mia"; 
console.log(user2.name); // Output: Mia (can change existing properties)

// Try to add a new property
user2.city = "Delhi"; 
console.log(user2.city); // Output: undefined (cannot add new property)

// Try to delete a property
delete user2.age;
console.log(user2.age); // Output: 25 (cannot delete)

// 10. Create a nested object (`user → address → city`) and access the city name inside it.
const user3 = {
    name: "lowXenergy",
    age: 99,
    address: {
        street: "123 Main St",
        city: "Earth",
        zip: "171110"
    }
};
// Using dot notation
console.log(user3.address.city); 

// Using destructuring
const { address: { city } } = user3;
console.log(city); 