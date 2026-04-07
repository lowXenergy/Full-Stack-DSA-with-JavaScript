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

// Give Discount. See discount png
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

// Calculate Bill based on unit consumed. See: bill.png
