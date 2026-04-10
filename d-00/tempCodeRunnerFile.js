let prompt= require('prompt-sync')()
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