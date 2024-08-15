function makeEqual1(words: string[]): boolean {
    let n = words.length;
    if (n === 1) return true;
    let obj: { [key: string]: number } = {};
    for (const word of words) for (const char of word) obj[char] = (obj[char] || 0) + 1;
    for (const key in obj) if (obj[key] % n !== 0) return false;
    return true;
};
function makeEqual2(words: string[]): boolean {
    let n = words.length;
    if (n === 1) return true;
    let freq = new Array(26).fill(0);
    for (const word of words) for (const char of word) freq[char.charCodeAt(0) - 97]++;
    for (const count of freq) if (count % n !== 0) return false;
    return true;
};

console.log(makeEqual2(["abc", "aabc", "bc"]));
console.log(makeEqual2(["ab", "a"]));
console.log(makeEqual2(["abbab"]));