function calculate(s: string): number {
    let currentNumber = 0;
    let lastSign = '+';
    const stack: number[] = [];
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (isDigit2(char)) {
            currentNumber = currentNumber * 10 + parseInt(char);
        }
        if (!isDigit2(char) && char !== " " || i === s.length - 1) {
            if (lastSign === '+') { stack.push(currentNumber) }
            else if (lastSign === '-') { stack.push(-currentNumber) }
            else if (lastSign === '*') { stack.push(stack.pop()! * currentNumber) }
            else if (lastSign === '/') { stack.push(truncate(stack.pop()! / currentNumber)) }
            currentNumber = 0;
            lastSign = char;
        }
    }
    return stack.reduce((a, b) => a + b, 0);
}

const isDigit2 = (char: string): boolean => {
    return char >= '0' && char <= '9';
}
const truncate = (char: number): number => {
    return char < 0 ? Math.ceil(char) : Math.floor(char);
}

// Example usage:
console.log("result:-", calculate("3+2*2")); // Output: 7
console.log(calculate(" 3/2 ")); // Output: 1
console.log(calculate(" 3+5 / 2 ")); // Output: 5
console.log(calculate("0-2147483647")); // Output: 5
