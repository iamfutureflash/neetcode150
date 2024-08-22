function sortedSquares1(nums: number[]): number[] {
    return nums.map((num) => num ** 2).sort((a, b) => a - b);
}
function sortedSquares2(nums: number[]): number[] {
    let n = nums.length;
    let result = [];
    let i = 0, j = n - 1;
    let k = n - 1;
    while (k >= 0) {
        let a = nums[i] ** 2;
        let b = nums[j] ** 2;
        if (a > b) {
            result[k] = a
            i++;
        } else {
            result[k] = b;
            j--;
        }
        k--;
    }
    return result;
}
console.log(sortedSquares2([-4, -1, 0, 3, 10]));
console.log(sortedSquares2([-7, -3, 2, 3, 11]));