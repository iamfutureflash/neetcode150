function isPowerOfTwo1(n: number): boolean { //tm->log(n) // sc-> O(1)  
    if (n === 1) return true;
    if (n <= 0) return false;
    else if (n % 2 === 0) {
        return isPowerOfTwo1(n / 2);
    }
    return false;
};
function isPowerOfTwo2(n: number): boolean {
    if (n <= 0) return false;
    return (n & (n - 1)) === 0;
};
function isPowerOfTwo3(n: number): boolean {
    if (n <= 0) return false;
    return 2 ** 30 % n === 0;
};
function isPowerOfTwo4(n: number): boolean {
    if (n <= 0) return false;
    while (n % 2 === 0) {
        n /= 2;
    }
    return n === 1;
};
console.log(isPowerOfTwo2(1));
console.log(isPowerOfTwo2(16));
console.log(isPowerOfTwo2(3));
console.log(isPowerOfTwo2(6));