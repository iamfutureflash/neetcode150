function numberOfMatches(n: number): number {
    let matches = 0;
    if (!(1 <= n && n <= 200)) return matches;
    while (n > 1) {
        if (n % 2 === 0) {
            matches += n / 2;
            n = n / 2;
        }
        else {
            matches += (n - 1) / 2;
            n = (n - 1) / 2 + 1
        }
    }
    return matches;
};
function numberOfMatches1(n: number): number { return n - 1; }

console.log(numberOfMatches1(7));
console.log(numberOfMatches1(14));
console.log(numberOfMatches1(200));