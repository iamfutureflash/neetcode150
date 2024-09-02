let temp = new Array(38).fill(-1);
const find = (n: number): number => {
    if (n === 0) return 0;
    if (n === 1 || n === 2) return 1;

    if (temp[n] !== -1) return temp[n];

    let a = find(n - 1);
    let b = find(n - 2);
    let c = find(n - 3);

    temp[n] = a + b + c;

    return temp[n];
}
function tribonacci(n: number): number {
    return find(n);
};

console.log(tribonacci(4));
console.log(tribonacci(25));