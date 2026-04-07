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