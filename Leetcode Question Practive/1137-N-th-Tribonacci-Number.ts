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
function tribonacci2(n: number): number {
    let temp = new Array(38);
    temp[0] = 0;
    temp[1] = 1;
    temp[2] = 1;
    for (let i = 3; i < 38; i++) {
        temp[i] = temp[i - 1] + temp[i - 2] + temp[i - 3];
    }
    return temp[n];
};
function tribonacci3(n: number): number {
    if (n === 0) return 0;
    if (n === 1 || n === 2) return 1;
    let a = 0, b = 1, c = 1, d = a + b + c;
    for (let i = 3; i < n + 1; i++) {
        d = a + b + c;
        a = b;
        b = c;
        c = d;
    }
    return d;
};

console.log(tribonacci(4));
console.log(tribonacci(25));
console.log(tribonacci3(4));
console.log(tribonacci3(25));