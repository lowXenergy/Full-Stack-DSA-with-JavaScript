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