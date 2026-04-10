//USE const prompt = require('prompt-sync')();

// const/let/var name = prompt('What is your name?');
// To take prompt from the user

// Retrun the greatest of two numbers
let a =9;
let b = 10;
if(a>b)console.log(`${a} is greatest`);
else console.log(`${b} is greatest`);

// Even or odd
if(a%2 !== 0) console.log("Odd");
else console.log("Even");

// Valid voter
let age = 33
let name1 = "lowXenergy"
if(age>= 18)console.log(`${name1} is a valid voter`);
else console.log(`${name1} is not a valid voter`);

// Leap year
let year = 2020
if((year%4==0 && year%100!==0)||year%400==0)console.log("Leap year");
else console.log("Not a leap year");

// Give Discount. See 5.discount png
let amount = 93000;
if(amount <= 5000){
    console.log("0% discount applied ");
    console.log(`Payable amount is ${amount}`);
}
else if(amount <= 7000){
    console.log("5% discount applied ");
    let discount = amount - (amount * 0.05)
    console.log(`Payable amount is ${discount}`);
}
else if(amount <= 9000){
    console.log("10% discount applied ");
    let discount = amount - (amount * 0.1)
    console.log(`Payable amount is ${discount}`);
}
else {
    console.log("20% discount applied ");
    let discount = amount - (amount * 0.2)
    console.log(`Payable amount is ${discount}`);
}

// let amount = 93000;
// let finalAmount;
// let discountRate;

// if (amount <= 5000) discountRate = 0;
// else if (amount <= 7000) discountRate = 0.05;
// else if (amount <= 9000) discountRate = 0.1;
// else discountRate = 0.2;

// finalAmount = amount - (amount * discountRate);

// console.log(`${discountRate * 100}% discount applied`);
// console.log(`Payable amount is ${finalAmount}`);

// Calculate Bill based on unit consumed. See: 5.bill.png
const prompt = require('prompt-sync')();
let unit = Number(prompt("Enter the unit "))
let payableAmt = 0;

if(unit > 400){
    payableAmt += (unit-400)*13;
    unit=400;
}
if(unit>200){
    payableAmt += (unit-200)*8;
    unit=200;
}
if(unit>100){
    payableAmt += (unit-100)*6;
    unit=100;
}
payableAmt += unit*4.2
console.log("Total amount to pay is ",payayableAmt.toFixed(1));

// What is the output of the following code?
// int a = 5, b = 10;
// int result = (a > b) ? a + b : a - b;
// System.out.println(result);

//-5

// What is the correct syntax for a ternary conditional statement?
// expression?"True":"False"

// What will be the output of this JavaScript code?
let x = 0;
if (x) {
    console.log("Truthy");
} else {
    console.log("Falsy");
}
// Falsy

// What will be the output of this JavaScript code?
// let a = 5;
// let b = "5";
// if (a === b) {
//     console.log("Equal");
// } else {
//     console.log("Not Equal");
// }

//"Not Equal"

// Find the greatest of 3 number
let c = 10 , d=20 , e=90;
if(c >= d && c >= e)
        console.log(`${c} is the greatest`); 
    else if(d >=c && d >= e)
        console.log(`${d} is the greatest`);
    else
        console.log(`${e} is the greatest`);

// or you can use math max function
console.log(`Greatest number is ${Math.max(c,d,e)}`)

// Print day name form day number
// const prompt = require('prompt-sync')();

let day = Number(prompt("Enter the day number "));
switch (day) {
    case 1:
        console.log("Sunday");
        break;
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Enter a valid day(1-7)");
        break;
}

// function printDayName(day) {
//   if (day === 1) {
//     return "Monday";
//   } else if (day === 2) {
//     return "Tuesday";
//   } else if (day === 3) {
//     return "Wednesday";
//   } else if (day === 4) {
//     return "Thursday";
//   } else if (day === 5) {
//     return "Friday";
//   } else if (day === 6) {
//     return "Saturday";
//   } else if (day === 7) {
//     return "Sunday";
//   } else {
//     return "Invalid day number";
//   }
// }

// Determine movie status based on rating(see 5.MovieStatus.png)
let status = 6.3;
if(status <= 2.0) console.log("Flop");
else if(status <= 3.4) console.log("Semi-hit");
else if(status <= 4.5) console.log("Hit");
else console.log("Superhit");

// Check if a character is vowel or constant
let char1 = "M";
char1.toLowerCase();
if(char1 === 'a'||char1 === 'e'||char1 === 'i'||char1 === 'o'||char1 === 'u')console.log("It's a vowel");
else console.log("It's a constant");

// let char1 = "M".toLowerCase();

// if ("aeiou".includes(char1)) {
//   console.log("It's a vowel");
// } else {
//   console.log("It's a consonant");
// }

