/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
   const bracketMap = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    
    const stack = [];

    for (const char of s) {
        if (bracketMap[char]) {  // If it's a closing bracket
            // Check if the stack is empty or the top of the stack doesn't match
            if (stack.length === 0 || stack.pop() !== bracketMap[char]) {
                return false;
            }
        } else {  // It's an opening bracket
            stack.push(char);
        }
    }
    
    // If the stack is empty, all brackets were matched
    return stack.length === 0;
}

module.exports = { isValid };


