function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false;
    let obj1 = new Map();
    let obj2 = new Map();
    for (const char of s) obj1.set(char, ((obj1.get(char) || 0) + 1));
    for (const char of t) obj2.set(char, ((obj2.get(char) || 0) + 1));
    for (const [key, value] of obj1) if (value !== obj2.get(key)) return false;
    return true;
};

function isAnagram1(s: string, t: string): boolean {
    if (s.length !== t.length) return false;
    let obj1: { [key: string]: number } = {};
    let obj2: { [key: string]: number } = {};
    for (let i = 0; i < s.length; i++) {
        obj1[s[i]] = (obj1[s[i]] || 0) + 1;
        obj2[t[i]] = (obj2[t[i]] || 0) + 1;
    }
    for (const key in obj1) if (obj1[key] !== obj2[key]) return false;
    return true;
};
console.log(isAnagram1("anagram", "nagaram"));
console.log(isAnagram1("rat", "car"));
console.log(isAnagram1("ab", "a"));
console.log(isAnagram1("aacc", "ccac"));

