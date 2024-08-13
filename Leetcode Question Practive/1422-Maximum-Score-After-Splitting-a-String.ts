function maxScore1(s: string): number {
    let maxCount = 0;
    for (let i = 0; i < s.length - 1; i++) {
        let leftZerosCount = 0;
        let rightOnesCount = 0;
        for (let j = 0; j < i + 1; j++) if (s[j] === "0") leftZerosCount++;
        for (let j = i + 1; j < s.length; j++) if (s[j] === "1") rightOnesCount++;
        maxCount = Math.max((leftZerosCount + rightOnesCount), maxCount);
    }
    return maxCount;
};
function maxScore2(s: string): number {
    let result = -Infinity;
    let n = s.length;
    let total_ones: number = 0;
    let ones: number = 0;
    let zeros: number = 0;
    for (const char of s) if (char === "1") total_ones++
    for (let i = 0; i < n - 1; i++) {
        if (s[i] === "1") ones++;
        else zeros++;
        let right_ones = total_ones - ones;
        result = Math.max(result, (right_ones + zeros))
    }
    return result;
};
function maxScore3(s: string): number {
    let n = s.length;
    let score: number = -Infinity;
    let zeros: number = 0;
    let ones: number = 0;
    for (let i = 0; i < n - 1; i++) {
        if (s[i] === "1") ones++;
        else zeros++;
        score = Math.max(score, (zeros - ones));
    }
    if (s[n - 1] === "1") ones++;

    return score + ones;
};

console.log(maxScore3("011101"));
console.log(maxScore3("00111"));
console.log(maxScore3("1111"));
console.log(maxScore3("00"));