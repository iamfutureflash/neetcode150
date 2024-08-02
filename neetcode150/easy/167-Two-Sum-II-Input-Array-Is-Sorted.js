/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (n, t) {
    let l = 0;
    let r = n.length - 1;
    while (l < r) {
        let sum = n[l] + n[r];
        if (sum > t) {
            r -= 1;
        } else if (sum < t) {
            l += 1;
        } else {
            return [l + 1, r + 1];
        }
    }
    return [-1,-1]
};

// Test cases
console.log('output 9', twoSum([2, 7, 11, 15], 9));
console.log('output 6', twoSum([2, 3, 4], 6));
console.log('output -1', twoSum([-1, 0], -1));