
// function twoSum(nums: number[], target: number): number[] {

//     // time complexity is n^2 (n square)

//     for (let i = 0; i < nums.length; i++) {
//         for (let j = 0; j < nums.length - i; j++) {
//             // console.log("i->", nums[i], " j->", nums[j], "index-> ", [i, j], "target->", nums[i] + nums[j]);
//             if ((nums[i] + nums[j]) === target) return [i, j];
//         }
//     }
//     return [];
// };
function twoSum1(nums: number[], target: number): number[] {
    // time complexity is n^2 (n square)
    const hash: { [key: number]: number } = {};
    for (let i = 0; i < nums.length; i++) {
        const element = target - nums[i];
        if (hash.hasOwnProperty(element)) {
            return [hash[element], i];
        }
        hash[nums[i]] = i;
    }
    return [];
};
// console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum1([3, 2, 4], 6));