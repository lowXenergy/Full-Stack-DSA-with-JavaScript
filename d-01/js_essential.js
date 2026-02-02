// 1. Sum of 2 integers
function sum(a, b) {
    // Write your logic here
    console.log(a+b)
}

sum(8,3);
module.exports = {sum}

// 2. Greet the user

function greet(name, age) {
    // Write your logic here
    console.log(`Hello ${name} you are ${age} years old.`)
}

module.exports = { greet };

// 3. Swap 2 numbers

function swapNumbers(a, b) {
    // Write your logic here
    a=a+b;
    b=a-b;
    a=a-b;
    return [a,b];
}

module.exports = { swapNumbers };

// 4. Compound intrest calculation

function calculateCompoundInterest(P, r, t, n) {
    const A = P * Math.pow(1 + r / n, n * t);
    const CI = A - P;
    return CI.toFixed(2); // return STRING
}

module.exports = { calculateCompoundInterest };

