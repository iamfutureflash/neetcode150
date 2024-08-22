function maxFrequencyElements(nums: number[]): number {
    let obj: { [key: number]: number } = {};
    let maxFreq = 0;
    for (const element of nums) {
        obj[element] = (obj[element] || 0) + 1;
        maxFreq = Math.max(obj[element], maxFreq);
    }
    let c = 0;
    for (const key in obj) if (obj[key] === maxFreq) c++;
    // console.log("obj", obj, "maxFreq", maxFreq);
    console.log("maxFreq", maxFreq, "c", c,);
    return maxFreq * c;
};
function maxFrequencyElements2(nums: number[]): number {
    let arr = new Array(101).fill(0);
    let maxFreq = 0;
    for (const element of nums) {
        arr[element]++;
        maxFreq = Math.max(arr[element], maxFreq);
    }
    let c = 0;
    for (const key of arr) if (key === maxFreq) c++;
    return maxFreq * c;
};
function maxFrequencyElements3(nums: number[]): number {
    let arr = new Array(101).fill(0);
    let maxFreq = 0;
    let total = 0;
    for (const element of nums) {
        arr[element]++;
        let freq = arr[element];
        if (freq > maxFreq) {
            maxFreq = freq;
            total = maxFreq;
        } else if (freq === maxFreq) {
            total += maxFreq;
        }
    }
    return total;
};

console.log(maxFrequencyElements3([1, 2, 2, 3, 1, 4]));
console.log(maxFrequencyElements3([1, 2, 3, 4, 5]));
console.log(maxFrequencyElements3([5, 1, 2, 5, 3, 4, 5,]));