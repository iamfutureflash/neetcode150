function findDifferentBinaryString(nums: string[]): string {
    const n = nums.length;
    let result = '';
    for (let i = 0; i < n; i++) result += nums[i][i] === '0' ? '1' : '0';
    return result;
};

console.log(findDifferentBinaryString(["01", "10"]));
console.log(findDifferentBinaryString(["00", "01"]));
console.log(findDifferentBinaryString(["111", "011", "001"]));
console.log(findDifferentBinaryString(["001", "000", "100"]));