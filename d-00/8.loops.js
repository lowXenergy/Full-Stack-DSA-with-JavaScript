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
// let prompt = require('prompt-sync')()
let number = Number(prompt("Enter the number"))
if(number === 1){
    console.log("1 is not a Prime number");
    return
}
if(number === 2){
    console.log("2 is a Prime number");
    return
}
let flag = false;
for(let i = 2;i<number;i++){
    if(number%i===0)flag = true;
}
if(flag === true) console.log("Not a prime number");
else console.log("Prime number");

// let prompt = require('prompt-sync')();
// let number = Number(prompt("Enter the number: "));

// if (number <= 1) {
//     console.log("Not a prime number");
// } else if (number === 2) {
//     console.log("Prime number");
// } else {
//     let isPrime = true;

//     for (let i = 2; i <= Math.sqrt(number); i++) {
//         if (number % i === 0) {
//             isPrime = false;
//             break;
//         }
//     }

//     if (isPrime) console.log("Prime number");
//     else console.log("Not a prime number");
// }

// How many times will this loop run?
let i = 10;
while (i % 3 !== 0) {
    console.log(i);
    i--;
}

// 1

// What will be the output of this code?
// x = 5
// while x:
//     print(x)
//     x -= 1

// 5 4 3 2 1

// Factorial number
function factorial(n) {
    // Base case
    if (n === 0) 
        return 1;
        
    // Recursive step
    return n * factorial(n - 1);       
}

// Calculate power of a number
let a = 2, b= 3;
console.log(Math.pow(a,b))

// function calculatePower(a, b) {
//     // 0^0 is Undefined
//     if (a === 0 && b === 0) return "Undefined"; 
    
//     // Loop for exponent
//     let result = 1;
//     for (let i = 0; i < Math.abs(b); i++) { 
//         result *= a;
//     }
    
//     return result;
    
//     //Alternatively : Use built-in function
//     //return Math.pow(a, b);
// }

// Strong number
function factorial(num) {
    let fact = 1;
    for (let i = 1; i <= num; i++) {
        fact *= i;
    }
    return fact;
}

function isStrongNumber(n) {
    let sum = 0, temp = n;

    while (temp > 0) {
        sum += factorial(temp % 10); // Add factorial of each digit
        temp = Math.floor(temp / 10); // Remove last digit
    }

    return sum === n ? "Yes" : "No"; // Return result
}
console.log(isStrongNumber(145))

// What will be the output of the following code?
// let x = 50;

// if (x <= 50) {
//     if (x === 50) {
//         console.log("x is 50");
//     } else {
//         console.log("x is less than 50");
//     }
// } else {
//     console.log("x is greater than 50");
// }

// x is 50

//What will be the output of this code?
// x = 5
// while x:
//     print(x)
//     x -= 1

// 5 4 3 2 1

// What happens if the while condition is always true?
// let x = 1;
// while (true) {
//     console.log(x);
//     x++;
//     if (x > 3) break;
// }

// Runs 3 times

// Sum of digit of a number
function sumOfDigits(n) {
    let sum = 0;
    // Convert negative numbers to positive
    n = Math.abs(n); 

    while (n > 0) {
        // Add last digit
        sum += n % 10; 
        // Remove last digit
        n = Math.floor(n / 10); 
    }

    return sum;
}

// Automorphic number
function isAutomorphic(n) {
    // Using the while loop approach
    let square = n * n;
    let digits = 0, temp = n;
    
     // Count the number of digits in 'n'
    while (temp > 0) {
        digits++;
        temp = Math.floor(temp / 10);
    }
    
     // Extract the last 'digits' from the squared number
    let lastDigits = square % Math.pow(10, digits);
    
    // Check if the last extracted digits match the original number
    return lastDigits === n ? "Yes" : "No";
    
    //Using in-built method
    //let square = n * n;
    //return square.toString().endsWith(n.toString()) ? "Yes" : "No";
}

// Reverse number
function reverseNumber(n) {
    let reversed = 0;

    while (n > 0) {
        // Extract and append last digit
        reversed = reversed * 10 + (n % 10); 
        // Remove last digit
        n = Math.floor(n / 10); 
    }

    return reversed; 
}

// Harshad number
//     is_harshad(nStr) {
//         const n = parseInt(nStr, 10);
//         let digitSum = 0;

//         for (const ch of nStr) {
//             digitSum += parseInt(ch, 10);
//         }

//         if (digitSum !== 0 && n % digitSum === 0) {
//             return "Harshad Number";
//         }
//         return "Not Harshad Number";
//     }

function is_harshad(n) {
    let temp = n;
    let digitSum = 0;

    // Extract digits using while loop
    while (temp > 0) {
        let digit = temp % 10;
        digitSum += digit;
        temp = Math.floor(temp / 10);
    }

    // Check Harshad condition
    if (digitSum !== 0 && n % digitSum === 0) {
        return "Harshad Number";
    } else {
        return "Not Harshad Number";
    }
}

// Example
console.log(is_harshad(18)); // Harshad Number
console.log(is_harshad(19)); // Not Harshad Number

// Abundant number
// is_abundant(nStr) {
//         const n = parseInt(nStr, 10);
//         if (n <= 1) return "No";

//         let sum = 1;
//         for (let i = 2; i * i <= n; i++) {
//             if (n % i === 0) {
//                 sum += i;
//                 if (i !== Math.floor(n / i)) {
//                     sum += Math.floor(n / i);
//                 }
//             }
//         }

//         return sum > n ? "Yes" : "No";
// }

function is_abundant(n) {
    if (n <= 1) return "No";

    let sum = 0;

    for (let i = 1; i < n; i++) {
        if (n % i === 0) {
            sum += i;
        }
    }

    if (sum > n) {
        return "Yes";
    } else {
        return "No";
    }
}

// Example
console.log(is_abundant(12)); // Yes
console.log(is_abundant(10)); // No

// Print only prome factors/prime factorization.
// class Solution {
//     prime_factors(nStr) {
//         let n = parseInt(nStr, 10);
//         if (n <= 1) return "No prime factors";

//         let factors = [];
//         let i = 2;

//         while (i * i <= n) {
//             while (n % i === 0) {
//                 factors.push(i.toString());
//                 n = Math.floor(n / i);
//             }
//             i++;
//         }

//         if (n > 1) factors.push(n.toString());

//         return factors.join("\n");
//     }
// }

// module.exports = Solution;

function prime_factors(n) {
    if (n <= 1) return "No prime factors";

    let factors = [];

    for (let i = 2; i <= n; i++) {
        while (n % i === 0) {
            factors.push(i.toString());
            n = Math.floor(n / i);
        }
    }

    return factors.join("\n");
}

// Example
console.log(prime_factors(60));

// neon number
// class Solution {
//     is_neon(nStr) {
//         const n = parseInt(nStr, 10);
//         const sq = n * n;

//         let sum = 0;
//         for (const ch of sq.toString()) {
//             sum += parseInt(ch, 10);
//         }

//         return sum === n ? "Yes" : "No";
//     }
// }

// module.exports = Solution;

function is_neon(n) {
    let sq = n * n;
    let sum = 0;

    // Extract digits using while loop
    while (sq > 0) {
        let digit = sq % 10;
        sum += digit;
        sq = Math.floor(sq / 10);
    }

    return sum === n ? "Yes" : "No";
}

// Armstrong number
// class Solution {
//     is_armstrong(nStr) {
//         const n = parseInt(nStr, 10);
//         const digits = nStr.split("").map(Number);
//         const power = digits.length;

//         const sum = digits.reduce((acc, d) => acc + d ** power, 0);

//         return sum === n ? "Armstrong" : "Not Armstrong";
//     }
// }

// module.exports = Solution;
    
function is_armstrong(n) {
    let temp = n;
    let digits = 0;

    // Count number of digits
    while (temp > 0) {
        digits++;
        temp = Math.floor(temp / 10);
    }

    temp = n;
    let sum = 0;

    // Calculate sum of digits^power
    while (temp > 0) {
        let digit = temp % 10;
        let powerVal = 1;

        // compute digit^digits manually
        for (let i = 0; i < digits; i++) {
            powerVal *= digit;
        }

        sum += powerVal;
        temp = Math.floor(temp / 10);
    }

    if (sum === n) {
        return "Armstrong";
    } else {
        return "Not Armstrong";
    }
}