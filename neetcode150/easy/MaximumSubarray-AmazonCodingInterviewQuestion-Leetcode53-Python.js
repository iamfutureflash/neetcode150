// a = ( n(i), a + n(i) )
// b = (b, a)
var maxSubArray = (nums) => {
    let maxNum = nums[0];
    let maxSoFar = nums[0];
    if (nums.length === 1) {
        return maxSoFar;
    } else {
        for (let i = 1; i < nums.length; i++) {
            maxNum = Math.max(nums[i], maxNum + nums[i]);
            maxSoFar = Math.max(maxSoFar, maxNum);
        }
        return maxSoFar;
    }
};
// Test cases
console.log('output ', maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log('output ', maxSubArray([1]));
console.log('output ', maxSubArray([5, 4, -1, 7, 8]));
console.log('output ', maxSubArray([1, -4, -1, -7, 8]));
