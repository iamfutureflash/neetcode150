function maximumOddBinaryNumber(s: string): string {
    let n = s.length;
    let r = new Array(n - 1).fill(0);
    let j = 0;
    for (const e of s)
        if (e == '1')
            if (r[n] === '1') { r[j] = '1'; j++; }
            else r[n] = '1';
    return r.join('');
};
console.log(maximumOddBinaryNumber("010"));
console.log(maximumOddBinaryNumber("0101"));
console.log(maximumOddBinaryNumber("111"));