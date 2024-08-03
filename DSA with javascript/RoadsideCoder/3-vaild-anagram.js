// const anagram = (s, t) => {
//     return s.toString().split('').sort().join('') === t.toString().split('').sort().join('');
// }
const anagram = (s, t) => {
    if (s.length !== t.length) return false;
    let obj1 = {};
    let obj2 = {};
    for (let i = 0; i < s.length; i++) {
        obj1[s[i]] = (obj1[s[i]] || 0) + 1;
        obj2[t[i]] = (obj2[t[i]] || 0) + 1;
    }
    for (const key in obj1) {
        if (obj1[key] !== obj2[key]) return false;
    }
    return true;
}

console.log(anagram('naman', "nnaam"));
console.log(anagram('anagram', "aaangrm"));
console.log(anagram('anagrpam', "aaangrm"));