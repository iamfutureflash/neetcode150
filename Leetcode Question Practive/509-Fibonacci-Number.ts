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

console.log(fib(2));
console.log(fib(3));
console.log(fib(4));
console.log(fib(30));