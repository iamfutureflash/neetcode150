function divideArray(nums: number[], k: number): number[][] {
    nums.sort((a, b) => a - b);
    let n = nums.length;
    let r: number[][] = [];
    for (let i = 0; i < n; i += 3) {
        if (nums[i + 2] - nums[i] > k) return [];
        else r.push([nums[i], nums[i + 1], nums[i + 2]]);
    }
    return r;
};
console.log(divideArray([1, 3, 4, 8, 7, 9, 3, 5, 1], 2));
console.log(divideArray([2, 4, 2, 2, 5, 2], 2));
console.log(divideArray([4, 2, 9, 8, 2, 12, 7, 12, 10, 5, 8, 5, 5, 7, 9, 2, 5, 11], 14));