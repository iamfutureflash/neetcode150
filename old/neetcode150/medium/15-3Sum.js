/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function threeSum(nums) {
    nums.sort((a, b) => a - b);
    const n = nums.length;
    const result = [];
    for (let i = 0; i < n - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        let left = i + 1, right = n - 1;
        while (left < right) {
            const total = nums[i] + nums[left] + nums[right];
            if (total < 0) left++;
            else if (total > 0) right--;
            else {
                result.push([nums[i], nums[left], nums[right]])
                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;
                left++;
                right--;
            }
        }
    }
    return result;
}


// Example usage:
const nums1 = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(nums1));  // Output: [[-1, -1, 2], [-1, 0, 1]]

const nums2 = [0, 1, 1];
console.log(threeSum(nums2));  // Output: []

const nums3 = [0, 0, 0];
console.log(threeSum(nums3));  // Output: [[0, 0, 0]]
