function isValid(s) {
    let stack = [];
    const closeToOpen = {
        ')': '(',
        ']': '[',
        '}': '{',
    }
    for (let char of s) {
        if (char in closeToOpen) {
            const topElement = stack.length === 0 ? 'nof' : stack.pop();
            if (closeToOpen[char] !== topElement) return false;
        } else {
            stack.push(char);
        }
    }
    return stack.length === 0;
}

// Examples
console.log(isValid("({[]})"));   // Output: true
// console.log(isValid("()"));       // Output: true
// console.log(isValid("()[]{}"));   // Output: true
// console.log(isValid("(]"));       // Output: false
