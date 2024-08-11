/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
    let m = matrix.length;
    let n = matrix[0].length;
    
    for (let row = 0; row < m; row++) {
        for (let col = 0; col < n; col++) {
        }
    }
};
let a = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1]];
let b = [
    [0, 1, 2, 0],
    [3, 4, 5, 2],
    [1, 3, 1, 5]];
setZeroes(a);
// setZeroes(b);
console.log(a);
console.log("object");
// console.log(b);