function missingNumber(nums: number[]): number {
    let n = nums.length;
    let sum = n * (n + 1) / 2;
    let sum2 = n - 1 * ((n - 1) + 1) / 2;
    console.log("n", n, "sum,sum2", sum, sum2);
    for (const element of nums) sum -= element;
    return sum;
};
console.log(missingNumber([3, 0, 1]));
console.log(missingNumber([0, 1]));
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));