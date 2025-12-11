function longestConsecutive(nums: number[]): number {
  if (nums.length === 0) return 0;
  const set = new Set(nums);
  let longest = 0;
  for (const num of set) {
    if (!set.has(num - 1)) {
      let current = num;
      let length = 1;
      while (set.has(current + 1)) {
        current++;
        length++;
      }
      longest = Math.max(longest, length);
    }
  }
  return longest;
}

console.log(longestConsecutive([2, 20, 4, 10, 3, 4, 5]));
console.log(longestConsecutive([0, 3, 2, 5, 4, 6, 1, 1]));
