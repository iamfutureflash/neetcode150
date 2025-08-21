function singleNumber1(nums: number[]): number {
    let obj: { [key: number]: number } = {};
    for (const element of nums) obj[element] = (obj[element] || 0) + 1;
    for (const element in obj) if (obj[element] === 1) return Number(element);
    return 0;
};
function singleNumber2(nums: number[]): number {
    const numsSet = new Set<number>();
    for (const element of nums) if (numsSet.has(element)) numsSet.delete(element); else numsSet.add(element);
    return numsSet.values().next().value;
};
console.log(singleNumber2([2, 2, 1]));
console.log(singleNumber2([4, 1, 2, 1, 2]));
console.log(singleNumber2([1]));