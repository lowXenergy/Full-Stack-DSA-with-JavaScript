// Level 1 – Pure Beginner Practice
const prompt = require("prompt-sync")();
/*
Ask user’s age and check if eligible to vote
If age >= 18 → “Eligible”, else → “Not eligible”
*/

const age = Number(prompt("Enter your age: ").trim());


if (isNaN(age) || age < 0) {
    console.log("Enter correct age");
}
else if(age>500){
    console.log("You are not alive"); 
} 
else if (age < 18) {
    console.log("Not eligible");
} 
else {
    console.log("Eligible");
}

// Print multiplication table of 5
// Use loop to print 5 × 1 to 5 × 10.

for(let i=1;i<11;i++){
    console.log(`5 x ${i} = ${5*i}`);
}

// Count how many numbers between 1 and 15 are greater than 8
//Loop and count conditionally.

let count =0;
for(let i =1;i<16;i++){
    if(i>8){
        count++;   
    } 
}
console.log("Count",count);

// Ask user for password and print access status
// Hardcoded correct password. Compare with user input.

let password="lowXenergy";
let input=prompt("Enter the password").trim();

while(password!==input){
    console.log("incorrect password. Try again");
    input=prompt("Enter the password").trim();
}
console.log("Access granted");

//Level 2 – Slightly Tougher but Logical

// Allow only 3 attempts to enter correct password
// If user gets it right early, stop. If not → “Account locked”

let password1="lowXenergy";
let attempts1 =0;
let input1=prompt("Enter the password");
attempts1++;

while(password1!=input1){
    if(attempts1==3){
        console.log("Account locked");
        break;
    }
   else{ 
    console.log("incorrect password. Try again");
    input1=prompt("Enter the password");
    attempts1++;
}
}

// Ask user for words until they type “stop”. Count how many times they typed “yes”
// Loop until "stop" is typed. Count "yes".

// let input2=prompt("Enter the word ");
// let countYes =0;
// if(input2=='yes')countYes++;
// while(input2!=='stop'){
//     input2=prompt("Enter the word ");
//     if(input2=='yes')countYes++;
// }
// console.log(countYes);

let countYes = 0;
let input4;

while ((input4 = prompt("Enter a word: ").trim().toLowerCase()) !== "stop") {
    if (input4 === "yes") {
        countYes++;
    }
}

console.log("Total 'yes' count:", countYes);

// Print numbers divisible by 7 from 1 to 50
// Use modulo % and loop.

for(let i=1;i<51;i++){
    if(i%7==0){
        console.log(`Number divisible by 7 is ${i}`);
    }
}

// Sum of all odd numbers from 1 to 30
// Add only odd numbers. Print final sum.

let sum=0;
for(let i=1;i<31;i+=2){
    sum=sum+i;
}
console.log(sum);

// Keep asking number until user enters an even number
// Use while loop. Stop only if input is even.

let number = Number(prompt("Enter a number "));

while(isNaN(number) || number % 2 !== 0){
    number = Number(prompt("Enter a number "));
}

// Print numbers between two user inputs
// Input start and end using prompt() → print all between.

let num = Number(prompt("Enter the first number: "));
let num1 = Number(prompt("Enter the second number: "));

if (isNaN(num) || isNaN(num1)) {
    console.log("Input should be a number");
}
else if (num1 < num) {
    console.log("Second number should be greater than or equal to first number");
}
else {
    for (let i = num; i <= num1; i++) {
        console.log(i);
    }
}

// Print only first 3 odd numbers from 1 to 20
// Use loop. Stop with break after 3 odd prints.

let count1 =0;
for(let i=1;i<21;i+=2){
    if(count1>=3)break;
    
        console.log(i);
        count1++;
    
}

// Ask user 5 numbers. Count how many are positive
// Use loop + condition + counter.

let count2 = 0;
let validInputs = 0;

while (validInputs < 5) {
    let raw = prompt("Enter a number: ").trim();
    let number = Number(raw);

    if (isNaN(number)) {
        console.log("Invalid input. Please enter a numeric value.");
        continue;   // do not count this attempt
    }

    if (number > 0) {
        count2++;
    }

    validInputs++;
}

console.log("Total number of positive numbers:", count2);
// ATM Simulator – Allow 3 withdrawals
// Start with ₹1000 balance. Ask withdrawal amount 3 times.
// If enough balance → deduct
// Else → print “Insufficient balance”
let balance = 1000;
let attempts = 0;
const MAX_ATTEMPTS = 3;

while (attempts < MAX_ATTEMPTS) {

    let input = prompt("Enter withdrawal amount: ").trim();
    let amount = Number(input);

    // Validate numeric input
    if (isNaN(amount)) {
        console.log("Invalid input. Please enter a numeric value.");
        continue;
    }

    // Validate integer currency (no paise allowed)
    if (!Number.isInteger(amount)) {
        console.log("Amount must be in whole rupees.");
        continue;
    }

    // Validate positive amount
    if (amount <= 0) {
        console.log("Amount must be greater than zero.");
        continue;
    }

    // Validate sufficient balance
    if (amount > balance) {
        console.log("Insufficient balance.");
        console.log("Current balance:", balance);
        attempts++;
        continue;
    }

    // Successful withdrawal
    balance -= amount;
    attempts++;
    console.log("Withdrawal successful.");
    console.log("Remaining balance:", balance);
}

console.log("Session ended.");
console.log("Final balance:", balance);