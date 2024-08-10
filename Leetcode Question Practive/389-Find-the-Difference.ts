function findTheDifference(s: string, t: string): string {
    let hash: { [key: string]: number } = {}
    let hash2: { [key: string]: number } = {}
    for (const char of s) hash[char] = (hash[char] || 0) + 1;
    for (const char of t) {
        if (!hash.hasOwnProperty(char)) return char;
        else hash2[char] = (hash2[char] || 0) + 1;
    }
    for (const char of t) if (hash[char] !== hash2[char]) return char;
    return '';
};

function findTheDifferenceWithHash(s: string, t: string): string {
    let hash: { [key: string]: number } = {}
    for (const char of s) hash[char] = (hash[char] || 0) + 1;
    for (const char of t) {
        if (!hash[char] || hash[char] === 0) { return char }
        hash[char]--;
    }
    return '';
};
// console.log(findTheDifferenceWithHash("abcd", "abcde"));
// console.log(findTheDifferenceWithHash("", "y"));
// console.log(findTheDifferenceWithHash("a", "aa"));
function findTheDifferenceWithSum(s: string, t: string): string {
    let sumS = 0;
    for (const char of s) sumS += char.charCodeAt(0);
    let sumT = 0;
    for (const char of t) sumT += char.charCodeAt(0);
    return String.fromCharCode(sumT - sumS);
};
// console.log(findTheDifferenceWithSum("abcd", "abcde"));
// console.log(findTheDifferenceWithSum("", "y"));
// console.log(findTheDifferenceWithSum("a", "aa"));

function findTheDifferenceWithXOR(s: string, t: string): string {
    let xor = 0;
    for (const char of s) xor ^= char.charCodeAt(0);
    for (const char of t) xor ^= char.charCodeAt(0);
    return String.fromCharCode(xor);
};
console.log(findTheDifferenceWithXOR("abcd", "abcde"));
console.log(findTheDifferenceWithXOR("", "y"));
console.log(findTheDifferenceWithXOR("a", "aa"));