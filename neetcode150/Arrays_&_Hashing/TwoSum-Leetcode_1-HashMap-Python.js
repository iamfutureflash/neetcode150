console.log('Two sum');

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
    let prevMap = new Object();
    for (let [i, num] of nums.entries()) {
        const diff = target - num;
        if (diff in prevMap) {
            return [prevMap[diff], i]
        }
        prevMap[nums[i]] = i;
    }
};
const n = [2, 7, 11, 15];
const t = 9;
const r = twoSum(n, t)
console.log(r);