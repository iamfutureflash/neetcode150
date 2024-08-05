function productExceptSelf(nums: number[]): number[] {
  const n = nums.length;
  let answer: number[] = new Array(n).fill(1);

  let leftProduct = 1;
  for (let i = 0; i < n; i++) {
    answer[i] = leftProduct;
    leftProduct = leftProduct * nums[i];
  }
  let rightProduct = 1;
  for (let i = n - 1; i >= 0; i--) {
    answer[i] = answer[i] * rightProduct;
    rightProduct = rightProduct * nums[i];
  }

  return answer;
}

// Example usage:
console.log(productExceptSelf([1, 2, 3, 4])); // Output: [24, 12, 8, 6]
// console.log(productExceptSelf([1, 2, 6])); // Output: [24, 12, 8, 6]

// console.log(productExceptSelf([-1, 1, 0, -3, 3]));  // Output: [0, 0, 9, 0, 0]
