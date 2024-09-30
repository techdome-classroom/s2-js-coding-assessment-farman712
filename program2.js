/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(roman) {
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
    
    // Iterate through the Roman numeral string
    for (let i = 0; i < roman.length; i++) {
        let current = romanMap[roman[i]];
        let next = romanMap[roman[i + 1]];

        // If the current value is less than the next value, subtract it
        if (next && current < next) {
            total -= current;
        } else {
            // Otherwise, add it to the total
            total += current;
        }
    }

    return total;
};


module.exports={romanToInt}