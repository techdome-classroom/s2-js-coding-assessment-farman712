/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    let matchingBrackets = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        }
        else if (char === ')' || char === '}' || char === ']') {
            if (stack.length === 0 || stack[stack.length - 1] !== matchingBrackets[char]) {
                return false;
            }
            stack.pop();
        }
    }
    return stack.length === 0;
};

module.exports = { isValid };


