function singleNumberIII(nums: number[]): number[] {
    const numsSet = new Set<number>();
    for (const element of nums) if (numsSet.has(element)) numsSet.delete(element); else numsSet.add(element);
    let a = numsSet.values().next().value;
    numsSet.delete(a);
    let b = numsSet.values().next().value;
    return [a, b];
};
console.log(singleNumberIII([1, 2, 1, 3, 2, 5]));
console.log(singleNumberIII([-1, 0]));
console.log(singleNumberIII([0, 1]));