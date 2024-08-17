function maxDistance(arrays: number[][]): number {
    let md = 0;
    let min = arrays[0][0];
    let max = arrays[0][arrays[0].length - 1];
    for (const element of arrays) {
        const cMin = element[0];
        const cMax = element[element.length - 1];
        md = Math.max(md, Math.abs(cMin - max), Math.abs(cMax - min));
        min = Math.min(min, cMin);
        max = Math.max(max, cMax);
    }
    return md;
};
console.log(maxDistance([[1, 2, 3], [4, 5], [1, 2, 3]]));
// console.log(maxDistance([[1], [1]]));
// console.log(maxDistance([[1, 4], [0, 5]]));