function maxLengthBetweenEqualCharacters1(s: string): number {
    let r = -1;
    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j < s.length; j++) {
            if (s[i] === s[j]) r = Math.max(r, (j - i - 1))
        }
    }
    return r;
};
function maxLengthBetweenEqualCharacters2(s: string): number {
    let r = -1;
    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j < s.length; j++) {
            if (s[i] === s[j]) r = Math.max(r, (j - i - 1))
        }
    }
    return r;
};
function maxLengthBetweenEqualCharacters3(s: string): number {
    let r = -1;
    let freq = new Array(26).fill(-1);
    for (let i = 0; i < s.length; i++) {
        let index = s[i].charCodeAt(0) - 97;
        if (freq[index] === -1) {
            freq[index] = i;
        } else {
            r = Math.max(r, i - freq[index] - 1);
        }
    }
    return r;
};

console.log(maxLengthBetweenEqualCharacters2("aa"));
console.log(maxLengthBetweenEqualCharacters2("abca"));
console.log(maxLengthBetweenEqualCharacters2("cbzxy"));
console.log(maxLengthBetweenEqualCharacters2("abcdaeghijke"));
console.log("----------------------------------------");

console.log(maxLengthBetweenEqualCharacters3("aa"));
console.log(maxLengthBetweenEqualCharacters3("abca"));
console.log(maxLengthBetweenEqualCharacters3("cbzxy"));
console.log(maxLengthBetweenEqualCharacters3("abcdaeghijke"));