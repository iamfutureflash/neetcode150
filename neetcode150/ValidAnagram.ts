function isAnagramTS1(s: string, t: string): boolean {
  if (s.length !== t.length) return false;
  let a: Record<string, number> = {};
  for (const char of s) {
    if (a[char]) a[char] += 1;
    else a[char] = 1;
  }
  for (const char of t) {
    if (a[char]) a[char] -= 1;
    else a[char] = -1;
  }
  for (const key in a) if (a[key] !== 0) return false;
  return true;
}

// console.log(isAnagramTS1("racecar", "carrace"));

function isAnagramTS2(s: string, t: string): boolean {
  if (s.length !== t.length) return false;
  let counts = Array(26).fill(0);
  let countt = Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    counts[s.charCodeAt(i) - 97]++;
    countt[t.charCodeAt(i) - 97]++;
  }

  for (let i = 0; i < 26; i++) if (counts[i] !== countt[i]) return false;

  return true;
}

console.log(isAnagramTS2("racecar", "carrace"));
