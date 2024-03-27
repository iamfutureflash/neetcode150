console.log('Two sum');

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// const twoSum = (nums, target) => {
//     for (let i = 0; i < nums.length; i++) {
//         const diff = target - nums[i];
//         const j = nums.indexOf(diff,i+1);
//         console.log(nums.indexOf(diff) !== -1);
//         console.log(nums.indexOf(diff) !== i);
//         console.log('diff ', diff);

//         console.log('j ',j);
//         if (j !== -1 ) {
//             return [i, j]
//         }
//     }
// }
const twoSum = (nums, target) => {
    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];
        const j = nums.indexOf(diff,i+1);
        if (j !== -1 ) {return [i, j]}
    }
}
const n = [4,6,7,8,9];
const t = 13;
const r = twoSum(n, t)
console.log('result ', r);