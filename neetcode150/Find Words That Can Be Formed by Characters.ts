function countCharacters(words: string[], chars: string): number {
  let count = 0;
  const charsmap: { [key: string]: number } = {};
  for (let ch of chars) {
    if (charsmap[ch]) charsmap[ch] += charsmap[ch];
    else charsmap[ch] = 1;
  }

  for (const word of words) {
    const m1: { [key: string]: number } = {};
    for (let ch of word) {
      if (m1[ch]) m1[ch] += m1[ch];
      else m1[ch] = 1;
    }
    for (const a in m1) {
      if (charsmap[a] >= m1[a]) {
        m1[a] -= m1[a];
      }
    }
    if (Array.from(Object.values(m1)).filter((n) => n > 0).length === 0) {
      count += word.length;
    }
  }
  return count;
}

console.log(countCharacters(["hello", "world", "leetcode"], "welldonehoneyr"));
