const topKFrequent_S1 = (nums, k) => {
    const sn = nums.sort();
    const fm = new Object();
    for (const num of sn) {
        if (fm.hasOwnProperty(num)) {
            fm[num] = fm[num] + 1;
        } else {
            fm[num] = 1;
        }
    }
    console.log('fm', fm);
    const b = Object.keys(fm).map(a => Number(a));

    return b.slice(0, k)
};
const topKFrequent_S2 = (nums, k) => {
    const fm = new Map();
    for (const n of nums) fm.set(n, (fm.get(n) || 0) + 1)
    //  const sortedKeys = Array.from(fm.keys()).sort((a, b) => fm.get(b) - fm.get(a));
     const sortedKeys = [...fm.keys()].sort((a, b) => fm.get(b) - fm.get(a));
    return sortedKeys.slice(0,k)
};

// Example usage:
const nums = [4, 1, -1, 2, -1, 2, 3,3,3];
const k = 2;
const result = topKFrequent_S2(nums, k);
console.log(result); // Output: [1, 2]
