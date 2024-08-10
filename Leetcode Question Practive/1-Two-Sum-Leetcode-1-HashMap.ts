// 1. Two Sum
// Solved
// Easy
// Topics
// Companies
// Hint

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.



// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]


function twoSum1(nums: number[], target: number): number[] {
    // time complexity is n^2 (n square)
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length - i; j++) {
            // console.log("i->", nums[i], " j->", nums[j], "index-> ", [i, j], "target->", nums[i] + nums[j]);
            if ((nums[i] + nums[j]) === target) return [i, j];
        }
    }
    return [];
};
function twoSum2(nums: number[], target: number): number[] {
    // time complexity is n O(n) (n square)
    const hash: { [key: number]: number } = {};
    for (let i = 0; i < nums.length; i++) {
        const element = target - nums[i];
        if (hash.hasOwnProperty(element)) return [hash[element], i];
        hash[nums[i]] = i;
    }
    return [];
};
console.log(twoSum2([2, 7, 11, 15], 9));
console.log(twoSum2([3, 2, 4], 6));