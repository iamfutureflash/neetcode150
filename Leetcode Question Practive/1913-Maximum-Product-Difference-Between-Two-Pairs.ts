function maxProductDifference(nums: number[]): number {
    nums.sort((a, b) => a - b);
    return (nums[nums.length - 1] * nums[nums.length - 2]) - (nums[0] * nums[1]);
};

function maxProductDifference2(nums: number[]): number {
    let largest = -Infinity;
    let secondLargest = -Infinity;
    let smallest = Infinity;
    let secondSmallest = Infinity;
    for (const num of nums) {
        if (num > largest) {
            secondLargest = largest;
            largest = num;
        } else {
            secondLargest = Math.max(secondLargest, num);
        }
        if (num < smallest) {
            secondSmallest = smallest;
            smallest = num;
        } else {
            secondSmallest = Math.min(secondSmallest, num);
        }
    }

    return (largest * secondLargest) - (smallest * secondSmallest);
};


console.log(maxProductDifference2([5, 6, 2, 7, 4]));
console.log(maxProductDifference2([4, 2, 5, 9, 7, 4, 8]));