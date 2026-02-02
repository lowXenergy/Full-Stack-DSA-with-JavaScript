//Set is a linear data structure that holdes multiple unique values
let set = new Set();

set.add(10);
set.add(20);
set.add(30);
set.add(40);
set.add(50);
set.add(60);
set.add(10);
set.add(10);
console.log(set);

set.delete(60);
console.log(set);

console.log(set.has(200));//has tell us weather a value is present in the set or not
console.log(set.has(10));
console.log(set.size);//Property that tell the size of the set

// Making set from the array 
let arr= [1,1,1,22,33,22,33,4,5,4,5,10,10,90,90,9,9]
let set1 = new Set();

for(let i=0; i<arr.length;i++){
    set1.add(arr[i]);
}
console.log(arr);
console.log(set1);

// OR

let set2 = new Set(arr);
console.log(set2);

// Printing only that element that occur only once in an array
let arr2= [1,1,22,33,22,33,4,5,4,5,10,10,90,90,9]
let set3 = new Set();

for(let i=0;i<arr2.length;i++){
    if(set3.has(arr2[i])) set3.delete(arr2[i]);
    else set3.add(arr2[i]);
}
console.log(set3);
