// print natural number from 1 to n
let prompt= require('prompt-sync')()
let n = Number(prompt("Enter a number"))
for(let i = 1;i<=n;i++){
    console.log(i);   
}

//print natural number from n to 1
// let prompt= require('prompt-sync')()
let n1 = Number(prompt("Enter a number"))
for(let i = n1;i>=1;i--){
    console.log(i);   
}

// Sum up to n term
// let prompt= require('prompt-sync')()
let n3 = Number(prompt("Enter a number"))
let sum = 0 ;
for(let i = 1;i<=n3;i++){
    sum+=i;   
}
console.log(sum);

// Factorial of a number
let num = 5;
let fact = 1;
for(let i = num;i>=1;i--){
    fact *= i;
}
console.log(fact);

// Print all factors of a number
let num1 = 6;
for(let i = 1;i<=num1;i++){
    if(num1%i===0)console.log(i);
}

// Sum of even and odd number b/w the range
// let prompt= require('prompt-sync')()
let start = Number(prompt("Enter the start "))
let end = Number(prompt("Enter the end "));
if(start>end)[start,end]=[end,start];
let evenSum=0,oddSum=0;
for(let i = start;i<=end;i++){
    if(i%2===0)evenSum+=i;
    else oddSum +=i;
}
console.log(`Even Sum is ${evenSum}
Odd Sum is ${oddSum}`);

// What will be the output of the following code?
let x = 50;
if (x <= 50) {
    if (x === 50) {
        console.log("x is 50");
    } else {
        console.log("x is less than 50");
    }
} else {
    console.log("x is greater than 50");
}
//x is 50

// How many times will the following loop execute?
let count = 0;
for (let i = 2; i <= 20; i += 3) {
    count++;
}
console.log(count);
// 7

// Prime number or not
