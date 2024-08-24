function isIsomorphic(s: string, t: string): boolean {
    let map1 = new Map();
    let map2 = new Map();
    let n = s.length
    for (let i = 0; i < n; i++) {
        let ch1 = s[i];
        let ch2 = t[i];
        if (map1.has(ch1) && map1.get(ch1) !== ch2 || map2.has(ch2) && map2.get(ch2) !== ch1) return false;
        map1.set(ch1, ch2);
        map2.set(ch2, ch1);
    }
    return true;
};
console.log(isIsomorphic("egg", "add"));
console.log(isIsomorphic("foo", "bar"));
console.log(isIsomorphic("paper", "title"));