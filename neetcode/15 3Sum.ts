function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);
  const n = nums.length;
  const res: number[][] = [];
  for (let i = 0; i < n; i++) {
    const n1 = nums[i];
    if (nums[i] === nums[i - 1]) continue;

    let l = i + 1;
    let r = n - 1;
    while (l < r) {
      const sum = n1 + nums[l] + nums[r];
      if (sum === 0) {
        res.push([n1, nums[l], nums[r]]);
        while (l < r && nums[l] === nums[l + 1]) l++;
        while (l < r && nums[r] === nums[r - 1]) r--;
      }
      if (sum < 0) {
        l++;
      } else {
        r--;
      }
    }
  }
  return res;
}

console.log(
  threeSum([
    -10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
    10, 11, -13,
  ])
);
console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSum([0, 1, 1]));
console.log(threeSum([0, 0, 0]));
