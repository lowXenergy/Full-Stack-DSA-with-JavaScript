// What does the following print?

let arr = [[1, 2], [3, 4], [5, 6]];
console.log(arr.length);

//3

//What is wrong with the following code?

let arr1 = new Array(2).fill(new Array(2).fill(0));
arr[0][0] = 5;
console.log(arr1);
//fill() + arrays/objects = shared references
//All rows change their first element

//Which statement will change only the second row’s second element in a 3×3 matrix?
// matrix[1][1] = 99;