// Sum and mean of the array 

function calculateSumAndMean(arr, n) {
    let sum = 0;
    
    // Loop through each element
    for (let i = 0; i < arr.length; i++) { 
        // Add each element to sum
        sum += arr[i]; 
    }
    
    // Calculate mean (average)
    let mean = sum / arr.length; 
    
    // Return sum and mean rounded to 1 decimal place
    return [sum, mean.toFixed(1)]; 
}

// Find the greatest element and it's index

function findGreatestElementAndIndex(arr) {
    // Write your logic here
    let max=arr[0];
    let index=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i];
            index=i;
        }
    }
    return [max,index]
}

// Find the 2nd largest element

function findSecondGreatestElement(arr) {
    // Write your logic here
    let largest=Math.max(arr[0],arr[1]);
    let slargest=Math.min(arr[0],arr[1]);

    for(let i=2;i<arr.length;i++){
        if(arr[i]>largest){
            slargest=largest;
            largest=arr[i];
        }else if(arr[i]>=slargest){
            slargest=arr[i]
        }
    }
    return slargest
}

function findSecondGreatestElement(arr) {
    // Write your logic here
    let largest = -Infinity;
    let slargest = -Infinity;

    for(let i=0;i<arr.length;i++){
        if(arr[i]>largest){
            slargest=largest;
            largest=arr[i];
        }else if(arr[i]>=slargest && arr[i] !== largest){
            slargest=arr[i]
        }
    }
    return slargest
}

// Write the primary reason to use array.
// They help in storing multiple elements under one variable name with index based access

// Output
// public class Main{
//     public static void main(String[] args) {
//         int []arr = new int[5];
//         for (int i = 0; i < 5; i++) {
//               System.out.println(arr[i]+" ");
//         }
//     }
// }

// arr = [0] * 5

// for i in range(5):
//     print(str(arr[i]) + " ")

// 0 0 0 0 0 

// Output
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

// Copy and reverse the array
function copyAndReverseArray(arr) {
    // Write your logic here
    let reverse=[];
    let j=0;
    for(i=arr.length-1;i>=0;i--){
        reverse[j]=arr[i];
        j++;
    }
    return reverse;
}

// Array left rotate by 1
function leftRotateByOne(arr) {
    // No need to rotate if array has 0 or 1 element
    if (arr.length < 2) return; 

    let firstElement = arr[0];

    for (let i = 0; i < arr.length - 1; i++) {
         // Shift elements left
        arr[i] = arr[i + 1];
    }
    
    // Move first element to last position
    arr[arr.length - 1] = firstElement; 
}

// Move Zero tp the end

function moveZerosToEnd(arr) {
    let n = arr.length;
    // Declare a new array of size 'n'
    let res = new Array(n); 
    
    // Two pointers: 'i' for non-zero elements, 'j' for zeros
    let i = 0, j = n - 1; 
    
    // Iterate through the original array
    for (let k = 0; k < n; k++) { 
        if (arr[k] > 0) { // if (arr[k] !== 0) 
            // Place non-zero elements at the beginning
            res[i++] = arr[k]; // post increment Assign arr[k] to res[i] then increment i
// res[i] = arr[k];
// i = i + 1;
        } else {
            // Place zeros at the end
            res[j--] = arr[k]; // post increment 
        }
    }
    // Return the modified array
    return res; 
}


function moveZerosInPlace(arr) {
    // 'i' scans the array, 'j' tracks position for non-zero elements
    let i = 0, j = 0; 
    let n = arr.length;

    while (i < n) {
        // If current element is zero, just move 'i' forward
        if (arr[i] === 0) i++;
        else {
            // Swap non-zero element at 'i' with the zero at 'j'
            [arr[i], arr[j]] = [arr[j], arr[i]];
            j++; // Move 'j' forward to the next position for non-zero elements
            i++; // Continue scanning the array
        }
    }
}
