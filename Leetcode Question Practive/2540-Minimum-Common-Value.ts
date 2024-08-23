function getCommon1(nums1: number[], nums2: number[]): number {
    let st = new Set([...nums1])
    for (const e of nums2) if (st.has(e)) return e;
    return -1;
};

const binarySearch = (nums: number[], target: number): boolean => {
    let left = 0, right = nums.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) return true;
        else if (nums[mid] < target) left = mid + 1;
        else if (nums[mid] > target) right = mid - 1;
    }
    return false;
}
function getCommon2(nums1: number[], nums2: number[]): number {
    for (const element of nums1) if (binarySearch(nums2, element)) return element
    return -1;
};
function getCommon3(nums1: number[], nums2: number[]): number {
    let i = 0, j = 0, n = nums1.length, m = nums2.length;
    while (i < n && j < m) {
        if (nums1[i] === nums2[j]) return nums1[i]
        else if (nums1[i] < nums2[j]) i++;
        else if (nums1[i] > nums2[j]) j++;
    }
    return -1;
};

console.log(getCommon2([1, 2, 3], [2, 4]));
console.log(getCommon2([1, 2, 3, 6], [2, 3, 4, 5]));