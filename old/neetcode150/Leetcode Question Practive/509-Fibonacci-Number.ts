let tempFib = new Array(31).fill(-1);
const solveFib = (n: number): number => {
    if (n === 0) return 0;
    if (n === 1) return 1;
    if (tempFib[n] !== -1) return tempFib[n];
    let a = solveFib(n - 1);
    let b = solveFib(n - 2);
    tempFib[n] = a + b;
    return tempFib[n];
}
function fib(n: number): number {
    return solveFib(n);
};
function fib2(n: number): number {
    if (n === 0) return 0;
    if (n === 1) return 1;
    let a = 0, b = 1, c = a + b;
    for (let i = 2; i < n + 1; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return c;
};

console.log(fib(2));
console.log(fib(3));
console.log(fib(4));
console.log(fib(30));
console.log(fib2(30));