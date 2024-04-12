// function isPalindrome(s) {
//     let newSTR = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
//     return newSTR === newSTR.split('').reverse().join('');
// }

// // Test cases
// console.log(isPalindrome("A man, a plan, a canal: Panama"));
// console.log(isPalindrome("race a car"));                      // Output: false
// console.log(isPalindrome(" "));

function isPalindrome(s) {
    let l = 0;
    let r = s.length - 1;
    const AlphaNumRegex = /[A-Za-z0-9]/;
    while (l < r) {

        while (l < r && !AlphaNum(s[l])) { l++; }
        while (l < r && !AlphaNum(s[r])) { r--; }

        if (s[l].toLowerCase() !== s[r].toLowerCase()) {
            return false;
        }
        l++;
        r--;
    }
    return true;
}
const AlphaNum = (c) => {
    // return /[a-zA-Z0-9]/.test(c)
    return (("A" <= c <= "Z") || ("a" <= c <= "z") || ("0" <= c <= "9"))
}
// function isPalindrome(s) {
//     let l = 0;
//     let r = s.length - 1;
//     const AlphaNumRegex = /[A-Za-z0-9]/;
//     while (l < r) {

//         while (l < r && !AlphaNumRegex.test(s[l])) { l++; }
//         while (l < r && !AlphaNumRegex.test(s[r])) { r--; }

//         if (s[l].toLowerCase() !== s[r].toLowerCase()) {
//             return false;
//         }
//         l++;
//         r--;
//     }
//     return true;
// }
// Test cases
console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("n,a,m,an"));
console.log(isPalindrome("race a car"));                      // Output: false
console.log(isPalindrome("aba"));

