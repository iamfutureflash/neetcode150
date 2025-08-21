var largestOddNumber = function (num: string): string {
    for (let i = num.length - 1; i >= 0; i--) if (parseInt(num[i], 10) % 2 === 1) return num.substring(0, i + 1);
    return '';
};

console.log(largestOddNumber('35427'));