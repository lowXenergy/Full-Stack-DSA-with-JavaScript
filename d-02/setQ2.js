// Check if a string is Pangram or not
// leetcode -> https://leetcode.com/problems/check-if-the-sentence-is-pangram/
// Solution -> https://leetcode.com/problems/check-if-the-sentence-is-pangram/solutions/7544996/simple-solution-in-js-by-d-blip1-zy6q/

/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIf= function(sentence) {
    let set = new Set(sentence.toLowerCase());
    const lowercase = "abcdefghijklmnopqrstuvwxyz";

    for (let ch of lowercase) {
        if (!set.has(ch)) {
            return false;
        }
    }
    return true;
};