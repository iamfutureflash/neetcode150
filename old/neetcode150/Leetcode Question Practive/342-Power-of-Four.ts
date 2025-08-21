function isPowerOfFour1(n: number): boolean {
    if (n < 1) return false;
    while (n % 4 === 0) {
        n /= 4;
    }
    return n === 1;
};
function isPowerOfFour2(n: number): boolean {
    if (n < 1) return false;
    return (4 ** 30 % n) === 0;
};
function isPowerOfFour3(n: number): boolean {
    if (n <= 0) return false;
    const logBase4 = Math.log(n) / Math.log(4);
    console.log("Math.log(n)", Math.log(n), "Math.log(4)", Math.log(4), "logBase4", logBase4);
    return logBase4 === Math.floor(logBase4);
};
console.log(isPowerOfFour3(27));
console.log(isPowerOfFour3(16));
// console.log(isPowerOfFour3(0));
// console.log(isPowerOfFour3(-1));
console.log(isPowerOfFour3(2));
console.log(isPowerOfFour3(64));