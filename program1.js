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
    for (let i = 0; i < expression.length; i++) {
        let char = expression[i];
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        }
        else if (char === ')' || char === '}' || char === ']') {
            // Check if the stack is empty or doesn't match the corresponding opening bracket
            if (stack.length === 0 || stack[stack.length - 1] !== matchingBrackets[char]) {
                return false;
            }
            // Pop the matching opening bracket from the stack
            stack.pop();
        }
    }

    // If the stack is empty, the parentheses are balanced
    return stack.length === 0;
};

module.exports = { isValid };


