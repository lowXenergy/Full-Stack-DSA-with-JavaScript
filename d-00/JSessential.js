// **var** – Function-scoped, can be **redeclared** and **updated**.
// **let** – Block-scoped, can be **updated** but **not redeclared** in the same scope.
// **const** – Block-scoped, **cannot be updated or redeclared** after initialization.

a = 10;
console.log(a);


```runs because **JavaScript automatically creates a global variable** when you assign a value to an undeclared identifier (in non-strict mode).

### What actually happens

When the engine sees:

a = 10;

and a was never declared, it implicitly does:

var a = 10; // in the global scope

So console.log(a) prints: 10

### Important detail

This behavior only works in **non-strict mode**. In **strict mode**, it throws an error:
"use strict";
a = 10;   // ReferenceError: a is not defined

### Why this is discouraged

Implicit globals:

* pollute the global namespace
* cause hard-to-debug bugs
* are blocked in modern best practices

### Correct way

Always declare variables explicitly:

javascript
let a = 10;
console.log(a);
```

// relation b/w string and integer in the prospective of airthematic operatior
// In JavaScript arithmetic, **strings are converted to numbers for `-`, `*`, `/`, `%`, but with `+` they cause **string concatenation** instead of addition.

// Type coercion is JavaScript’s automatic conversion of one data type to another when performing operations between different types.
// ### Example
// ```javascript
// "5" + 2   // "52"  (number → string)
// "5" - 2   // 3     (string → number)
// ```
// ### In one line
// Type coercion is the process where JavaScript implicitly converts data types to make an operation possible.


// Sum of 2 numbers

function sum(a, b) {
    // Write your logic here
    console.log(a+b)
}

// Greet the user
function greet(name, age) {
    // Write your logic here
    console.log(`Hello ${name} you are ${age} years old.`)
}

// Swap 2 numbers
function swapNumbers(a, b) {
    // Store the value of 'a' in a temporary variable
    let temp = a;

    // Assign the value of 'b' to 'a'
    a = b;

    // Assign the value stored in 'temp' (original 'a') to 'b'
    b = temp;

    // Return the swapped numbers as an array
   return [a, b];
}

// CI calculator
function calculateCompoundInterest(P, r, t, n) {
    // Apply compound interest formula
    let A = P * Math.pow((1 + r / n), (n * t)); 
    
    // Return only the interest earned
    return (A - P).toFixed(2); 
}