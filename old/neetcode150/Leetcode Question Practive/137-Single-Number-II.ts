function singleNumber(nums: number[]): number {
    let obj: { [key: number]: number } = {};
    for (const element of nums) obj[element] = (obj[element] || 0) + 1;
    for (const element in obj) if (obj[element] === 1) return Number(element);
    return 0;
};
console.log(singleNumber([2, 2, 3, 2]));
console.log(singleNumber([0, 1, 0, 1, 0, 1, 99]));