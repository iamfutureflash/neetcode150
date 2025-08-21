function maxSubArray(nums: number[]): number {
    let maxSub = nums[0];
    let curSum = 0;
    for (const n of nums) {
        if (curSum < 0) curSum = 0;
        curSum = curSum + n;
        maxSub = Math.max(curSum, maxSub);
    }
    return maxSub;
};
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));