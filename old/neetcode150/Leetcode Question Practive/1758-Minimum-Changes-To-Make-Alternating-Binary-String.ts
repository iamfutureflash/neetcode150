function minOperations1(s: string): number {
    let start_with_0 = 0;
    let start_with_1 = 0;
    for (let i = 0; i < s.length; i++) {
        if (i % 2 === 0) {
            if (s[i] === '1') start_with_0++;
            else start_with_1++;
        } else {
            if (s[i] === '0') start_with_0++;
            else start_with_1++;
        }
    }
    return Math.min(start_with_0, start_with_1);
};
function minOperations2(s: string): number {
    let start_with_0 = 0;
    for (let i = 0; i < s.length; i++) {
        if (i % 2 === 0) {
            if (s[i] === '1') start_with_0++;
            // else start_with_1++;
        } else {
            if (s[i] === '0') start_with_0++;
            // else start_with_1++;
        }
    }
    return Math.min(start_with_0, s.length - start_with_0);
};
console.log(minOperations2("0100"));
console.log(minOperations2("10"));
console.log(minOperations2("1111"));
console.log(minOperations2("10010100"));