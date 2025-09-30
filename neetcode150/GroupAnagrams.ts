function GroupAnagrams(angram: string[]): string[][] {
  const map = new Map<string, string[]>();

  for (const word of angram) {
    const key = word.split("").sort().join("");
    const bkt = map.get(key);
    if (bkt) bkt.push(word);
    else map.set(key, [word]);
  }
  
  return Array.from(map.values());
}

console.log(GroupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
