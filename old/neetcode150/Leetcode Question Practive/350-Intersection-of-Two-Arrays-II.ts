function intersect1(nums1: number[], nums2: number[]): number[] {
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);
    let result: number[] = [];
    let n = nums1.length;
    let m = nums2.length;
    let i = 0, j = 0;
    while (i < n && j < m) {
        if (nums1[i] === nums2[j]) { result.push(nums1[i]); i++; j++; }
        else if (nums1[i] < nums2[j]) i++;
        else if (nums1[i] > nums2[j]) j++;
    }
    return result;
};
console.log(intersect1([1, 2, 2, 1], [2, 2]));
console.log(intersect1([4, 9, 5], [9, 4, 9, 8, 4]));