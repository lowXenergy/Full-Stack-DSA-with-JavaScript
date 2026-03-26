//🟢 Level 1 – Basic Function, Array & Object Code Tasks (Easy)

// 1. Write a function `sayHello()` that prints `"Hello JavaScript"`.
function sayHello(){
    console.log("Hello JavaScript");
    
}
sayHello();

// 2. Create a function `add(a, b)` that returns their sum and log the result.

function  add(a,b) {
    return a+b;
}
console.log(add(1,2));

// 3. Write a function with a default parameter `name = "Guest"` that prints `"Hi <name>"`.

function greeting(name='Guest'){
    console.log(`Hi ${name}`);
}
greeting("lowXenergy")
// 4. Use rest parameters to make a function that adds unlimited numbers.

function rest(...nums){
    console.log(nums.reduce((s,n)=>s+n,0));
    
}
rest(1,2,3,4,5,6,7,8,9,10)
// 5. Create an IIFE that prints `"I run instantly!"`.

(function IIFE(){
    console.log("I run instantly!");
})()
// 6. Make a nested function where the inner one prints a variable from the outer one.

function outer(){
    let a=10;
    function inner(){
        console.log(a);
    }
    inner()
}
outer()

// 7. Create an array of 5 fruits. Add one at the end and remove one from the beginning.

const fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
console.log(fruits);
fruits.push("Pineapple")
console.log(fruits);
// fruits.splice(0,1)
fruits.shift()
console.log(fruits);


// 8. Use a `for` loop to print all elements of an array.
for(let i=0;i<fruits.length;i++){
    console.log(fruits[i])
}

for(let i in fruits){
    console.log(fruits[i])
}

for(const fruit of fruits){
    console.log(fruit)
}

// 9. Create an object `person` with keys `name`, `age`, and `city`, and print each key’s value.
let person = {
    name:'lowXenergy',
    age:99,
    city:'Earth'
}

for(let key in person){
    console.log(person[key]);
}


// 10. Use `setTimeout()` to log `"Time’s up!"` after 2 seconds.
setTimeout(() => {
    console.log("Time’s up!");
}, 2000);

