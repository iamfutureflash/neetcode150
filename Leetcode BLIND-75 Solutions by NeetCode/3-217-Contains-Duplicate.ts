// 217. Contains Duplicate
// Solved
// Easy
// Topics
// Companies

// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.



// Example 1:

// Input: nums = [1,2,3,1]
// Output: true

// Example 2:

// Input: nums = [1,2,3,4]
// Output: false

// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

function containsDuplicate(nums: number[]): boolean {
    let obj: { [key: number]: number } = {}
    for (const element of nums) {
        if (obj.hasOwnProperty(element)) { return true; }
        obj[element] = (obj[element] || 0) + 1;
    }
    return false;
};
function containsDuplicateWithSet(nums: number[]): boolean {
    const hashSet = new Set();
    for (const element of nums) {
        if(hashSet.has(element)) return true;
        hashSet.add(element);
    }
    return false;
};
console.log(containsDuplicateWithSet([1, 2, 3, 1]));
console.log(containsDuplicateWithSet([1, 2, 3, 4]));
console.log(containsDuplicateWithSet([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));