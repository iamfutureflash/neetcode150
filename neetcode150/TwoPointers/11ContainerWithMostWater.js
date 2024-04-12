/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let l = 0;
    let r = height.length - 1;
    let maxWater = 0;
    while (l < r) {
        // let w = r - l;
        // let h = Math.min(height[l], height[r]);
        // let water = w * h;
        // let water = (r - l) * (Math.min(height[l], height[r]));

        maxWater = Math.max((r - l) * (Math.min(height[l], height[r])), maxWater);
        (height[l] < height[r]) ? l++ : r--;
        // else r--;
    }
    return maxWater;
};
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));