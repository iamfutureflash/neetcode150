// function productExceptSelf(nums: number[]): number[] {
//   const result: number[] = [];
//   for (let i = 0; i < nums.length; i++) {
//     let product = 1;
//     for (let j = 0; j < nums.length; j++) {
//       if (i == j) continue;
//       product*=nums[j];
//     }
//     result.push(product);
//     product = 1;
//   }
//   return result;
// }

// console.log('check',productExceptSelf([1, 2, 3, 4])); // Output: [24,12,8,6]
// console.log('check',productExceptSelf([-1,1,0,-3,3]));  // Output: [0,0,9,0,0]

function productExceptSelf(nums: number[]): number[] {
  const result: number[] = [];
  const tp = nums.reduce((acc, c) => (acc *= c), 1);


}

console.log("check", productExceptSelf([1, 2, 3, 4])); // Output: [24,12,8,6]
console.log("check", productExceptSelf([-1, 1, 0, -3, 3])); // Output: [0,0,9,0,0]