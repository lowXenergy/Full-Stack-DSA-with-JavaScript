//Jewels and stone question
// leetcode link : https://leetcode.com/problems/jewels-and-stones/description/?submissionId=1905147260
// Solution : https://leetcode.com/problems/jewels-and-stones/solutions/7544857/beginner-friendly-beats-100-javascript-s-jcmi/

/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let set = new Set();
    for(let i = 0 ; i<jewels.length;i++){
        let ch = jewels.charAt(i);
        set.add(ch);
    }
    let count = 0;
    for(let i = 0;i<stones.length;i++){
        if(set.has(stones.charAt(i))){
            count++;
        }
    }
    return count;
};

// /**
//  * Count how many stones are jewels.
//  * @param {string} jewels - A string containing all the types of jewels.
//  * @param {string} stones - A string containing the stones to check.
//  * @return {number} - The count of stones that are jewels.
//  */
// function countJewelsInStones(jewels, stones) {
//     // Create a Set to store unique jewel characters for O(1) lookup
//     const jewelSet = new Set(jewels);
    
//     // Initialize a counter to keep track of jewels found in stones
//     let count = 0;

//     // Iterate through each character in the stones string
//     for (let char of stones) {
//         // Check if the current character (stone) is a jewel
//         if (jewelSet.has(char)) {
//             // If it's a jewel, increment the count
//             count++;
//         }
//     }

//     // Return the final count of jewels found in the stones
//     return count;
// }

// module.exports = { countJewelsInStones };