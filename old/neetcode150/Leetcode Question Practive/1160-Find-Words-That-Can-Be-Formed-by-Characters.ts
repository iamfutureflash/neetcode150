function countCharacters(words: string[], chars: string): number {
    let result = 0;
    let charMap = createFrequencyMap(chars);
    for (const word of words) {
        let wordMap = createFrequencyMap(word);
        if (canFormWord(wordMap, charMap)) {
            result += word.length;
        }
    }
    return result;
};
function canFormWord(wordMap: { [key: string]: number }, charMap: { [key: string]: number }) {
    for (const char in wordMap) {
        if (wordMap[char] > (charMap[char] || 0)) {
            return false;
        }
    }
    return true;
}
function createFrequencyMap(str: string): { [key: string]: number } {
    const count: { [key: string]: number } = {};
    for (const char of str) count[char] = (count[char] || 0) + 1;
    return count;
}

console.log(countCharacters(["cat", "bt", "hat", "tree"], "atach"));
console.log(countCharacters(["hello","world","leetcode"], "welldonehoneyr"));


function countCharactersOptimized(words: string[], chars: string): number {
    const idx = (c: string) => c.charCodeAt(0) - 'a'.charCodeAt(0);
    const cnt = new Array(26).fill(0);
    for (const c of chars) {
        cnt[idx(c)]++;
    }
    let ans = 0;
    for (const w of words) {
        const wc = new Array(26).fill(0);
        let ok = true;
        for (const c of w) {
            if (++wc[idx(c)] > cnt[idx(c)]) {
                ok = false;
                break;
            }
        }
        if (ok) {
            ans += w.length;
        }
    }
    return ans;
};