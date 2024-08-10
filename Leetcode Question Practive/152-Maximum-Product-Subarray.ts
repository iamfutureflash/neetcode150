function maxProduct(nums: number[]): number {
    let res = Math.max(...nums);
    let curMin = 1;
    let curMax = 1;
    for (const n of nums) {
        if (n === 0) { curMax = 1; curMin = 1; continue; }
        let tmp = curMax * n;
        curMax = Math.max(n * curMax, n * curMin, n);
        curMin = Math.min(tmp, n * curMin, n);
        res = Math.max(res, curMax);
    }
    return res;
};
console.log(maxProduct([2, 3, -2, 4]));