function findContentChildren(g: number[], s: number[]): number {
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);
    let i = 0;
    let j = 0;
    let m = g.length;
    let n = s.length;
    while (i < m && j < n) {
        if (g[i] <= s[j]) i++;
        j++;
    }
    return i;
};
console.log(findContentChildren([1, 2, 3], [1, 1]));
console.log(findContentChildren([1, 2], [1, 2, 3]));
console.log(findContentChildren([1, 2, 3], [3]));