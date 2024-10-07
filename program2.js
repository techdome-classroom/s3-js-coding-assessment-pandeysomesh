/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var romanToInt = function(s) {
    // Map to hold Roman numeral values
    const romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let total = 0;

    // Iterate through the string
    for (let i = 0; i < s.length; i++) {
        const currentVal = romanMap[s[i]];
        const nextVal = romanMap[s[i + 1]];

        // If the current value is less than the next value, subtract it
        if (nextVal && currentVal < nextVal) {
            total -= currentVal;
        } else {
            // Otherwise, add it
            total += currentVal;
        }
    }

    return total;
};

// Export the function for use in other modules
module.exports = { romanToInt };

    
};


module.exports={romanToInt}
