console.log("Two sum");

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums: number[], target: number): number[] => {
  let prevMap: { [key: number]: number } = {};
  for (let [i, num] of nums.entries()) {
    const diff = target - num;
    if (diff in prevMap) {
      return [prevMap[diff], i];
    }
    prevMap[nums[i]] = i;
  }
  return [];
};
const n: number[] = [2, 7, 11, 15];
const t: number = 9;
const r: number[] = twoSum(n, t);
console.log(r, n.entries());
