/* 
https://leetcode.com/problems/contains-duplicate/description/
217. Contains Duplicate
Solved Easy Topics Companies

Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 

Example 1:

Input: nums = [1,2,3,1]
Output: true

Example 2:

Input: nums = [1,2,3,4]
Output: false

Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true


 * @param {number[]} nums
 * @return {boolean}
var containsDuplicate = function(nums) {
    let set = new Set();
    for(i in nums){
        if(set.has(nums[i])){
            return true;
        }else{
            set.add(nums[i]);
        }
    }
    return false;
};
*/

const a = () => {
    const nums = [1, 2,2];
    let hashset = new Set();
    for (let n in nums) {
        console.log('hashset', hashset);
        if (hashset.has(nums[n])) {
            return true; // duplicate found
        } else {
            hashset.add(nums[n]);
        }
    }
    return false; // no duplicate found
}
const result = a();
console.log('result', result);