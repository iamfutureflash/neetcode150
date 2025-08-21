/**
 * @param {number[]} height
 * @return {number}
 */
// let trap = (height) => {
//     let maxLeft = 0;
//     let maxLeftArray = [];
//     let maxRight = 0;
//     let maxRightArray = [];
//     let minLeftAndRight = [];
//     let finalTrapWaterArray = [];
//     let finalTrapWaterValue = 0;

//     for (let i = 0; i < height.length; i++) {

//         let el = height[i - 1];
//         el = (typeof (el) == "number") ? el : 0;
//         maxLeft = Math.max(maxLeft, el);
//         maxLeftArray.push(maxLeft);
//     }

//     for (let j = height.length - 1; j >= 0; j--) {
//         let el = height[j + 1];
//         el = ((typeof el) == "number") ? el : 0;
//         maxRight = Math.max(maxRight, el)
//         maxRightArray.push(maxRight);
//     }
//     const revMaxRightArray = maxRightArray.reverse();

//     for (let i = 0; i < maxLeftArray.length; i++) {
//         let min = Math.min(maxLeftArray[i], revMaxRightArray[i]);
//         minLeftAndRight.push(min);
//     }
//     for (let i = 0; i < maxLeftArray.length; i++) {
//         let min = Math.min(maxLeftArray[i], revMaxRightArray[i]);
//         minLeftAndRight.push(min);
//     }
//     for (let i = 0; i < height.length; i++) {
//         let waterTrap = minLeftAndRight[i] - height[i];
//         finalTrapWaterArray.push(waterTrap < 0 ? 0 : waterTrap);
//     }
//     finalTrapWaterValue = finalTrapWaterArray.reduce((sv, cv) => sv + cv, 0);
//     return finalTrapWaterValue;
// };

let trap = (height) => {

    if (height.length == 0) return 0;

    let l = 0;
    let r = height.length - 1;
    let maxL = height[l];
    let maxR = height[r];
    let result = 0;
    while (l < r) {

        if (maxL < maxR || maxL == maxR) {
            l++
            maxL = Math.max(maxL, height[l]);
            let temp = maxL - height[l];
            temp = (temp < 0) ? 0 : temp;
            result += temp;
        } else {
            r--;
            maxR = Math.max(maxR, height[r]);
            let temp = maxR - height[r];
            temp = (temp < 0) ? 0 : temp;
            result += temp;
        }
    }
    return result;
    console.log('result ', result);


};
console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
console.log(trap([4, 2, 0, 3, 2, 5]));
