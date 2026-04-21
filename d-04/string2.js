// Count Asterisks

var countAsterisks = function(s) {
    let parts = s.split("|");
    let count = 0;

    for (let i = 0; i < parts.length; i += 2) {
        for (let ch of parts[i]) {
            if (ch === "*") count++;
        }
    }

    return count;
};

// optimal
var countAsterisks = function(s) {
    let count = 0;
    let insidePipe = false;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "|") {
            insidePipe = !insidePipe;
        } else if (s[i] === "*" && !insidePipe) {
            count++;
        }
    }

    return count;
};

// Check if A's appear before all b
// Brute

var checkString = function(s) {
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'a') {
            for (let j = 0; j < i; j++) {
                if (s[j] === 'b') return false;
            }
        }
    }
    return true;
};

// Better

var checkString = function(s) {
    let lastA = s.lastIndexOf('a');
    let firstB = s.indexOf('b');

    return lastA === -1 || firstB === -1 || lastA < firstB;
};

//Optimal
var checkString = function(s) {
   let flag = false;

   for (let i = 0; i < s.length; i++) {
        if (s[i] === 'b') flag = true;

        if (s[i] === 'a' && flag) return false;
   }

   return true;
};

// Using regex

var checkString = function(s) {
    return /^[a]*[b]*$/.test(s);
};

// Strong password

class Solution {
    strongPasswordCheckerII(password) {
        if (password.length < 8) return false;

        const specialChars = "!@#$%^&*()-+";

        // check lowercase
        let hasLower = false;
        for (let ch of password) {
            if (ch >= 'a' && ch <= 'z') {
                hasLower = true;
                break;
            }
        }

        // check uppercase
        let hasUpper = false;
        for (let ch of password) {
            if (ch >= 'A' && ch <= 'Z') {
                hasUpper = true;
                break;
            }
        }

        // check digit
        let hasDigit = false;
        for (let ch of password) {
            if (ch >= '0' && ch <= '9') {
                hasDigit = true;
                break;
            }
        }

        // check special
        let hasSpecial = false;
        for (let ch of password) {
            if (specialChars.includes(ch)) {
                hasSpecial = true;
                break;
            }
        }

        // check adjacent duplicates
        for (let i = 1; i < password.length; i++) {
            if (password[i] === password[i - 1]) return false;
        }

        return hasLower && hasUpper && hasDigit && hasSpecial;
    }
}

// Better
class Solution {
    strongPasswordCheckerII(password) {
        if (password.length < 8) return false;

        let hasLower = false, hasUpper = false;
        let hasDigit = false, hasSpecial = false;

        const specialChars = "!@#$%^&*()-+";

        let prev = "";

        for (let ch of password) {
            if (ch >= 'a' && ch <= 'z') hasLower = true;
            else if (ch >= 'A' && ch <= 'Z') hasUpper = true;
            else if (ch >= '0' && ch <= '9') hasDigit = true;
            else if (specialChars.includes(ch)) hasSpecial = true;

            if (ch === prev) return false;
            prev = ch;
        }

        return hasLower && hasUpper && hasDigit && hasSpecial;
    }
}

// Optimal
class Solution {
    strongPasswordCheckerII(password) {
        if (password.length < 8) return false;

        let hasLower = false;
        let hasUpper = false;
        let hasDigit = false;
        let hasSpecial = false;

        const specialChars = "!@#$%^&*()-+";

        for (let i = 0; i < password.length; i++) {
            const ch = password[i];

            if (ch >= 'a' && ch <= 'z') hasLower = true;
            else if (ch >= 'A' && ch <= 'Z') hasUpper = true;
            else if (ch >= '0' && ch <= '9') hasDigit = true;
            else if (specialChars.includes(ch)) hasSpecial = true;

            if (i > 0 && password[i] === password[i - 1]) return false;
        }

        return hasLower && hasUpper && hasDigit && hasSpecial;
    }
}

// Greatest English Letter in Upper and Lower Case

function greatestLetter(s) {
    let result = "";

    for (let i = 0; i < s.length; i++) {
        let upper = s[i].toUpperCase();
        let lower = s[i].toLowerCase();

        if (s.includes(upper) && s.includes(lower)) {
            if (upper > result) {
                result = upper;
            }
        }
    }

    return result;
}

// Better

function greatestLetter(s) {
    let result = "";

    for (let i = 0; i < s.length; i++) {
        let ch = s[i];

        if (ch >= 'A' && ch <= 'Z') {
            let lower = ch.toLowerCase();

            if (s.includes(lower)) {
                if (ch > result) {
                    result = ch;
                }
            }
        }
    }

    return result;
}

// Optimal

function greatestLetter(s) {
    for (let i = 90; i >= 65; i--) { // Z → A
        let upper = String.fromCharCode(i);
        let lower = String.fromCharCode(i + 32);

        if (s.includes(upper) && s.includes(lower)) {
            return upper;
        }
    }

    return "";
}

// Rearrange character to make string
// Brute force

class Solution {
  checkDistances(s, distance) {
    for (let i = 0; i < s.length; i++) {
      for (let j = i + 1; j < s.length; j++) {
        if (s[i] === s[j]) {
          let idx = s.charCodeAt(i) - 97;
          let actual = j - i - 1;

          if (actual !== distance[idx]) return false;

          break; // only first pair matters
        }
      }
    }
    return true;
  }
}

// Better
class Solution {
  checkDistances(s, distance) {
    for (let i = 0; i < 26; i++) {
      let ch = String.fromCharCode(i + 97);

      let first = s.indexOf(ch);
      if (first === -1) continue;

      let last = s.lastIndexOf(ch);
      let actual = last - first - 1;

      if (actual !== distance[i]) return false;
    }
    return true;
  }
}

// Optimal
class Solution {
  checkDistances(s, distance) {
    let firstSeen = new Array(26).fill(-1);

    for (let i = 0; i < s.length; i++) {
      let idx = s.charCodeAt(i) - 97;

      if (firstSeen[idx] === -1) {
        firstSeen[idx] = i;
      } else {
        let actual = i - firstSeen[idx] - 1;
        if (actual !== distance[idx]) {
          return false;
        }
      }
    }
    return true;
  }
}

// Largest 3 same digit number in string 
// Leetcode: https://leetcode.com/problems/remove-digit-from-number-to-maximize-result/description/

largestGoodInteger(num){
    // Write your code here
    let sorted = num
  .split("")              // ["6","7","7","7","1","3","3","3","3","9"]
  .sort((a, b) => a - b)  // numeric sort
  .join("");
  let triple ="";
  for(let i =0;i<num.length;i++){
    if (sorted[i] === sorted[i + 1] && sorted[i] === sorted[i + 2]) {
    triple = sorted[i] + sorted[i + 1] + sorted[i + 2];
  }
    
  }
  return triple;
}

// Remove digit From number to Maximize result

// Brute
var removeDigit = function(number, digit) {
    let max = "";

    for (let i = 0; i < number.length; i++) {
        if (number[i] === digit) {
            let candidate = number.slice(0, i) + number.slice(i + 1);
            if (candidate > max) {
                max = candidate;
            }
        }
    }

    return max;
};

//Optimal
var removeDigit = function(number, digit) {
    for (let i = 0; i < number.length - 1; i++) {
        if (number[i] === digit && number[i] < number[i + 1]) {
            return number.slice(0, i) + number.slice(i + 1);
        }
    }

    // fallback: remove last occurrence
    let lastIndex = number.lastIndexOf(digit);
    return number.slice(0, lastIndex) + number.slice(lastIndex + 1);
};