const prompt = require("prompt-sync")();
let balance = 1000;
let count3=0;

while(count3<3){
let amount=Number(prompt("Enter the amount "));
count3++;
if(isNaN(amount)){
    console.log("Amount should be in number");
    break;    
}
else if(amount<=0){
    console.log("Amount should be greater than zero");
    break;
}
else if(amount>balance){
    console.log("Insufficient balance");
    console.log("Remaining balance = ",balance);
    continue;
}else{
    console.log("Balance deducted");
    balance -= amount;
     console.log("Remaining balance = ",balance);
}
}