function validMountainArray(arr: number[]): boolean {
    let n = arr.length;
    if (n < 3) return false;
    let peaks = 0;
    for (let i = 1; i < n - 1; i++) {
        let prev = arr[i - 1];
        let curr = arr[i];
        let next = arr[i + 1];
        if (curr === prev || curr === next) return false;
        if (prev > curr && curr < next) return false;
        if (prev < curr && curr > next) {
            peaks++;
            if (peaks > 1) return false;
        }
    }
    return peaks === 1;
};

console.log(validMountainArray([2, 1]));
console.log(validMountainArray([3, 5, 5]));
console.log(validMountainArray([0, 3, 2, 1]));