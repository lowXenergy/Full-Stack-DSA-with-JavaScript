// First Letter to Appear Twice
//Leetcode -> https://leetcode.com/problems/first-letter-to-appear-twice/description/

/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(s) {
    let seen = new Set();

    for (let ch of s) {
        if (seen.has(ch)) {
            return ch;
        }
        seen.add(ch);
    }
};