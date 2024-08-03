// Ques 1 - Palindrome Number
// An integer is a palindrome when it reads the same forward and backward.

// Input: x = 121 ----->>>>. Output: true 
// Input: x = 10 ----->>>>.  Output: false 


const isPalindrome = (x) => {
    let y = x.toString().split("").reverse().join('');
    return x.toString() === y;
}
console.log(isPalindrome(121));
console.log(isPalindrome(10));
