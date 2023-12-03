const productExceptSelf = (nums) => {
    const numsLength = nums.length;
    const answer = new Array(numsLength).fill(1);
    let leftProduct = 1;
    let rightProduct = 1;
    console.log('numsLength', numsLength);
    console.log('answer', answer);
    console.log('leftProduct', leftProduct);
    console.log('rightProduct', rightProduct);

    for (let i = 0; i < numsLength; i++) {
        answer[i] = answer[i] * leftProduct;
        leftProduct = leftProduct * nums[i];
    }
    console.log('answer leftproduct', answer);
    for (let i = numsLength - 1; i >= 0; i--) {
        answer[i] = answer[i] * rightProduct;
        rightProduct = rightProduct * nums[i];
    }
    console.log('answer right product', answer);
    return answer;

}

const nums = [1, 2, 3, 4];
console.table(productExceptSelf(nums)); // Output: [24, 12, 8, 6]
