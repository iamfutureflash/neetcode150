function hammingWeight(n: number): number {
    let c = 0;
    let s = n.toString(2);
    for (const e of s) if (e !== '0') c++;
    return c;
};
console.log(hammingWeight(11));
console.log(hammingWeight(128));
console.log(hammingWeight(2147483645));