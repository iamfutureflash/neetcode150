/**
 * Counts the total length of all words that can be formed by the given characters.
 * Each character in chars can only be used as many times as it appears.
 * @param words - Array of words to check.
 * @param chars - String of available characters.
 * @returns The sum of lengths of all words that can be formed.
 */
function countCharacters(words: string[], chars: string): number {
    let sum = 0;
    // Build a frequency map for the available characters
    let charmap = new Map<string, number>();
    for (let c of chars) {
        charmap.set(c, (charmap.get(c) || 0) + 1);
    }
    // Iterate through each word to check if it can be formed
    for (const w of words) {
        // Build a frequency map for the current word
        let wordmap = new Map<string, number>();
        for (let i of w) {
            wordmap.set(i, (wordmap.get(i) || 0) + 1);
        }
        // Check if the word can be formed with the available characters
        let canForm = true;
        for (let [key, value] of wordmap) {
            if ((charmap.get(key) || 0) < value) {
                canForm = false;
                break;
            }
        }
        // If the word can be formed, add its length to the sum
        if (canForm) {
            sum += w.length;
        }
    }
    return sum;
}

console.log(countCharacters(["hello", "world", "leetcode"], "welldonehoneyr"));
