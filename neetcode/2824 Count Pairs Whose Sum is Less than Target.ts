// Rank 1,739,314
function countPairs(nums: number[], target: number): number {
  nums.sort((a, b) => a - b);
  let count = 0;
  let l = 0;
  let r = nums.length - 1;

  while (l < r) {
    const sum = nums[l] + nums[r];
    if (sum < target) {
      count = count + (r - l);
      l++;
    } else {
      r--;
    }
  }

  return count;
}

console.log(countPairs([-1, 1, 2, 3, 1], 2));
console.log(countPairs([-6, 2, 5, -2, -7, -1, 3], -2));
console.log(countPairs([-1, 1, 2, 3, 1], 2));
