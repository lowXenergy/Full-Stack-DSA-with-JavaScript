// CI
const prompt = require("prompt-sync")();

const p = Number(prompt("Enter the principal amount: "));
const r = Number(prompt("Enter the rate (in decimal, e.g., 0.05 for 5%): "));
const t = Number(prompt("Enter time: "));
const n = Number(prompt("Enter the number of times interest is computed per year: "));

function calculateCompoundInterest(P, r, t, n) {
    let A = P * Math.pow((1 + r / n), (n * t));
    let interest = A - P;

    return interest.toFixed(2);
}

console.log("Compound Interest:", calculateCompoundInterest(p, r, t, n));

// Swap 2 numbers without 3rd number

let num1 = Number(prompt("Enter 1st number "));
let num2 = Number(prompt("Enter 2nd number "));
console.log(`First number before swapping: ${num1}
Second number before swapping: ${num2}`);


num1 += num2;
num2 =  num1-num2;
num1 = num1-num2;

console.log(`
First number after swapping: ${num1}
Second number after swapping: ${num2}`);

// Area of triangle using heron's formula
// const prompt = require("prompt-sync")();
// let a = Number(prompt("Enter first side"));
// let b = Number(prompt("Enter second side"));
// let c = Number(prompt("Enter third side"));

// let s = (a+b+c)/2
// let A = Math.sqrt(s*(s-a)*(s-b)*(s-c))
// console.log(A);

// Triangle inequality rule:

// a + b > c
// a + c > b
// b + c > a

// Without this, Math.sqrt() may receive a negative number → NaN.

let a = Number(prompt("Enter first side: "));
let b = Number(prompt("Enter second side: "));
let c = Number(prompt("Enter third side: "));

// Check if valid triangle
if (a + b > c && a + c > b && b + c > a) {
    let s = (a + b + c) / 2;
    let A = Math.sqrt(s * (s - a) * (s - b) * (s - c));

    console.log("Area of triangle:", A.toFixed(2));
} else {
    console.log("Invalid triangle sides");
}

// Circumference and Area of a circle

let radius = parseFloat(prompt("Enter the radius of the circle: "));
let Circumference = 2*Math.PI*radius;
let Area = Math.PI*radius**2;
console.log(`Circumference of the circle is ${Circumference}
Area of the circle is ${Area}`);

// What is the output of Math.min (2, 0, -3, 5, -7)?
// -7

// What is the result of the expression "Math.max (-10, -5) "?
// -5

// Which method is used to calculate the smallest integer greater than or equal to a given number in the Math class?
// ceil()

// What does Math.random() return?
// A random floating-point number between 0 (inclusive) and 1 (exclusive)

// What will be the output of Math.trunc (4.9)?
// 4

// What is the result of Math.pow(2, 3)?
// 8

