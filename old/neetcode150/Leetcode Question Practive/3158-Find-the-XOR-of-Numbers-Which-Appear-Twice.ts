function duplicateNumbersXOR(nums: number[]): number {
    let result = 0;
    let seen = new Set<number>();
    for (const num of nums) seen.has(num) ? result ^= num : seen.add(num);
    return result;
};

console.log(duplicateNumbersXOR([1, 2, 1, 3]));
console.log(duplicateNumbersXOR([1, 2, 3]));
console.log(duplicateNumbersXOR([1, 2, 2, 1]));