// Predict the output

const mySet = new Set();
mySet.add(1);
mySet.add(1);
console.log(mySet.size);
//1

const set = new Set(["a", "b", "c"]);
console.log(set.has("b"));
//true

const set1 = new Set([1, 2, 3]);
set.clear();
console.log(set1.size);
// 0

// What type of value a can a JS set contain? 
// Any type of value.