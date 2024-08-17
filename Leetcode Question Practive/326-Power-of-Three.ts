function isPowerOfThree1(n: number): boolean {
    if (n < 1) return false;
    while (n % 3 === 0) {
        n /= 3;
    }
    return n === 1;
};
function isPowerOfThree2(n: number): boolean {
    if (n < 1) return false;
    return (3 ** 30 % n) === 0;
};
console.log(isPowerOfThree2(27));
console.log(isPowerOfThree2(16));
// console.log(isPowerOfThree2(0));
// console.log(isPowerOfThree2(-1));
console.log(isPowerOfThree2(2));
console.log(isPowerOfThree2(64));