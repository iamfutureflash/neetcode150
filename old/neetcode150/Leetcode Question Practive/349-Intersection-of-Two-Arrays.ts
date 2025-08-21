function intersection1(nums1: number[], nums2: number[]): number[] {
    let st1 = new Set([...nums1]);
    let st2 = new Set<number>([]);
    for (const element of nums2) if (st1.has(element)) st2.add(element);
    return [...st2];
};
function intersection2(nums1: number[], nums2: number[]): number[] {
    let st1 = new Set([...nums1]);
    let result: number[] = []
    for (const element of nums2) if (st1.has(element)) { result.push(element); st1.delete(element) }
    return result;
};
const binarySearch2 = (arr: number[], target: number) => {
    let left = 0, right = arr.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) return true;
        else if (arr[mid] < target) left = mid + 1;
        else if (arr[mid] > target) right = mid - 1;
    }
}
function intersection3(nums1: number[], nums2: number[]): number[] {
    nums1.sort((a, b) => a - b);
    let st = new Set<number>();
    for (const element of nums2) { if (binarySearch2(nums1, element)) { st.add(element); } }
    return [...st];
};
function intersection4(nums1: number[], nums2: number[]): number[] {
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);
    let result: number[] = [];
    let i = 0, j = 0;
    let n = nums1.length;
    let m = nums2.length;
    while (i < n && j < m) {
        if (nums1[i] === nums2[j]) {
            result.push(nums1[i]);
            while (i < n && nums1[i] === nums1[i + 1]) i++;
            while (j < m && nums2[j] === nums2[j + 1]) j++;
            i++; j++;
        }
        else if (nums1[i] < nums2[j]) i++;
        else if (nums1[i] > nums2[j]) j++;
    }
    return result;
};
console.log(intersection4([1, 2, 2, 1], [2, 2]));
console.log(intersection4([4, 9, 5], [9, 4, 9, 8, 4]));


