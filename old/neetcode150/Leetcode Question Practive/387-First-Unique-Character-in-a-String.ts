function firstUniqChar(s: string): number {
    let f = new Array(26).fill(0);
    for (const e of s) {
        let i = e.charCodeAt(0) - 97;
        f[i] = (f[i] || 0) + 1;
    }
    for (let j = 0; j < s.length; j++) {
        let i = s[j].charCodeAt(0) - 97;
        if (f[i] === 1) return j;
    }
    return -1;
};
console.log(firstUniqChar("leetcode"));
console.log(firstUniqChar("loveleetcode"));
console.log(firstUniqChar("aabb"));