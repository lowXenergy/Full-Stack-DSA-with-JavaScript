// What will str.includes ("app") return for let str = "apple"?
// true

// What does str.replace ("a", "0") do in JavaScript? For let str = "JavaScript"
// Replaces the first "a" with "0"

// Toggle alphabet case
function toggleCase(str) {
    // Write your code here
    let res ="";
    for(let ch of str){
        let code = ch.charCodeAt(0);
        res += (code >= 65 && code <= 90)
            ? String.fromCharCode(code + 32)
            : (code >= 97 && code <= 122)
            ? String.fromCharCode(code - 32)
            : ch;
    }
    return res;
}

function toggleCase(str) {
    let result = "";

    // Loop through each character
    for (let i = 0; i < str.length; i++) {
        let ch = str[i];

        // Check if uppercase letter
        if (ch >= 'A' && ch <= 'Z') {
            result += ch.toLowerCase(); // Convert to lowercase
        }
        // Check if lowercase letter
        else if (ch >= 'a' && ch <= 'z') {
            result += ch.toUpperCase(); // Convert to uppercase
        }
        // Non-alphabet characters
        else {
            result += ch; // Keep as it is
        }
    }

    return result;
}

// How can you reverse a string in JavaScript?
// str.split ("").reverse () join ('')

// Count strings with given prefix
function countPrefixMatch(words, pref) {
    // Write your code here
    let count =0;
    for(let i=0;i<words.length;i++){
        if(words[i].startsWith(pref))count++;
    }
    return count;
}

// Output
let str = "hello";
str[0] = "H";
console.log(str);
// hello

// capatilize first and last word of the string
function capitalizeEnds(str) {
    let words = str.split(" ");
    let ans = "";

    for (let word of words) {
        if (word.length === 1) {
            ans += word.toUpperCase() + " ";
        } else {
            let first = word.charAt(0).toUpperCase();
            let mid = word.substring(1, word.length - 1);
            let last = word.charAt(word.length - 1).toUpperCase();

            ans += first + mid + last + " ";
        }
    }

    return ans.trim();
}

// count frequency of the character

function characterFrequencyBrute(str) {
    str = str.toLowerCase();

    for (let i = 0; i < str.length; i++) {
        let count = 0;

        // skip if already counted
        let alreadyCounted = false;
        for (let k = 0; k < i; k++) {
            if (str[i] === str[k]) {
                alreadyCounted = true;
                break;
            }
        }
        if (alreadyCounted) continue;

        for (let j = 0; j < str.length; j++) {
            if (str[i] === str[j] && str[i] !== ' ') {
                count++;
            }
        }

        if (str[i] !== ' ') {
            console.log(str[i] + ": " + count);
        }
    }
}

function characterFrequencyBetter(str) {
    let map = {};

    for (let ch of str.toLowerCase()) {
        if (ch >= 'a' && ch <= 'z') {
            map[ch] = (map[ch] || 0) + 1;
        }
    }

    // sort keys
    let keys = Object.keys(map).sort();

    for (let key of keys) {
        console.log(key + ": " + map[key]);
    }
}

function characterFrequencyOptimal(str) {
    let freq = new Array(26).fill(0);

    for (let i = 0; i < str.length; i++) {
        let ch = str[i].toLowerCase();

        if (ch >= 'a' && ch <= 'z') {
            let index = ch.charCodeAt(0) - 97;
            freq[index]++;
        }
    }

    for (let i = 0; i < 26; i++) {
        if (freq[i] !== 0) {
            console.log(String.fromCharCode(i + 97) + ": " + freq[i]);
        }
    }
}

// Anagram string

function isAnagram(s1, s2) {
    // Your code here
    if(s1.length !== s2.length) return false;
    s1 = s1.split('').sort().join('');
    s2 = s2.split('').sort().join('');

    return s1 === s2;
}

// Maximum number of words found in sentences

function mostWordsFoundBrute(sentences) {
    let maxCount = 0;

    for (let s of sentences) {
        let count = 0;
        let inWord = false;

        for (let i = 0; i < s.length; i++) {
            if (s[i] !== ' ' && !inWord) {
                count++;
                inWord = true;
            } else if (s[i] === ' ') {
                inWord = false;
            }
        }

        maxCount = Math.max(maxCount, count);
    }

    return maxCount;
}

function mostWordsFoundBetter(sentences) {
    let maxCount = 0;

    for (let s of sentences) {
        let words = s.split(" ");
        maxCount = Math.max(maxCount, words.length);
    }

    return maxCount;
}

function mostWordsFound(sentences) {
  if (!Array.isArray(sentences)) return 0;
  let maxCount = 0;

  for (let s of sentences) {
    // normalize to string
    if (s === null || s === undefined) s = "";
    s = String(s).trim();

    if (s.length === 0) {
      maxCount = Math.max(maxCount, 0);
      continue;
    }

    // split on one or more whitespace characters (handles multiple spaces, tabs, etc.)
    const tokens = s.split(/\s+/).filter(Boolean);
    maxCount = Math.max(maxCount, tokens.length);
  }

  return maxCount;
}

// Sort the word in a sentence

s.split(" ").sort().join(" ")

if (typeof s !== "string" || s.trim().length === 0) return "";

  // Split words by one or more spaces and ignore empty tokens
  const words = s.trim().split(/\s+/).filter(Boolean);

  // Helper to determine if a character is uppercase letter
  const isUpper = ch => {
    if (!ch) return false;
    // letter and uppercase check
    return ch === ch.toUpperCase() && ch !== ch.toLowerCase();
  };

  // Comparator: uppercase-starting words first; within each group use localeCompare
  words.sort((a, b) => {
    const a0 = a.charAt(0);
    const b0 = b.charAt(0);
    const aUpper = isUpper(a0);
    const bUpper = isUpper(b0);

    if (aUpper && !bUpper) return -1;
    if (!aUpper && bUpper) return 1;

    // same case-group: use localeCompare for stable lexicographic ordering
    return a.localeCompare(b);
  });

  return words.join(" ");
