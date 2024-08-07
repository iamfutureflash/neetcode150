function calculate1(s: string): number {
    const st: any[] = [];
    let number = 0;
    let result = 0;
    let sign = 1;
    for (const n of s) {
        if (n === ' ') {
            continue; // Ignore spaces
        } else if (isDigit(n)) {
            number = number * 10 + parseInt(n);
        } else if (n === '+') {
            result = result + (number * sign);
            number = 0;
            sign = 1;
        } else if (n === '-') {
            result = result + (number * sign);
            number = 0;
            sign = -1;
        } else if (n === '(') {
            st.push(result);
            st.push(sign);
            result = 0;
            number = 0;
            sign = 1;
        } else if (n === ')') {
            result = result + (number * sign);
            number = 0;
            let st_sign = st.pop();
            let st_result = st.pop();
            result = result * (st_sign || 1);
            result = result + (st_result || 0);
        }
    }
    if (number !== 0) {
        result += (number * sign);
    }
    return result;
};
function isDigit(char: string): boolean {
    return char >= '0' && char <= '9';
}
function calculateWithEval(s: string): number {
    return eval(s);
};

// console.log(calculate('(1+(4+5+2)-3)+(6+8)'));
console.log(calculateWithEval('(1+(4+5+2)-3)+(6+8)'));