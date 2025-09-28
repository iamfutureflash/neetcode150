function twoSumTs(nums: number[], target: number): number[] {
  const prevMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (prevMap.has(diff)) {
      return [prevMap.get(diff), i];
    }
    prevMap.set(nums[i], i);
  }
  return [];
}

console.log(twoSumTs([3, 4, 5, 6], 7));
