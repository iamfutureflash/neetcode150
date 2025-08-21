
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    let evenSum = 0;
    let oddSum = 0;
    for (let i = 0; i < nums.length; i++) {
        if (i % 2 === 0) evenSum += nums[i];
        else oddSum += nums[i];
    }
    return Math.max(evenSum, oddSum);
};

console.log(rob([1, 2, 3, 1]));
console.log(rob([2, 7, 9, 3, 1]));