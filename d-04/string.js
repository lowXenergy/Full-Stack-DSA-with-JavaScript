// Each character in new line

function printEachChar(str) {
    // Write your logic here
    for(let i=0;i<=str.length-1;i++){
        console.log(str.charAt(i))
        // console.log(str[i]); 
    }
}

// Output of typeof"Hello" --> string

// REverse string 
function printEachChar(str) {
    // Write your logic here
    for(let i=0;i<=str.length-1;i++){
        console.log(str.charAt(i))
        // console.log(str[i]); 
    }
}

// Which method is used to find the index of the first occurrence of a substring?
// indexOf() returns the first index at which a specified value is found in a string, or -1 if not found.

// Palindromic string 
function isPalindromeInPlace(str) {
    // Write your code here
    let i=0,j=str.length-1;
        while(i<j){
            if(str[i]!==str[j]) return "No"
            j--;
            i++;
        }
        return "Yes"

}

function isPalindromeInPlace(str) {
    let left = 0;
    let right = str.length - 1;

    // Compare characters from both ends moving towards the center
    while (left < right) {
        if (str[left] !== str[right]) {
            return "No";
        }
        left++;
        right--;
    }

    return "Yes";
}

// Output
let str = "JavaScript";
console.log(str.slice(4, 10));
// Script

// How to convert string to uppercase
// str.toUpperCase()

// Output

// let str = "apple,banana,grape";
// let result = str.split(",");
// console.log(result[1]);

// banana