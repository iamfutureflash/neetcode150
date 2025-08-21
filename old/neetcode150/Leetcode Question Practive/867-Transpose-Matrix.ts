function transpose(matrix: number[][]): number[][] {
    let m = matrix.length;
    let n = matrix[0].length;
    let result: number[][] = new Array(n).fill(0).map(() => new Array(m).fill(0));
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            result[j][i] = matrix[i][j];
        }
    }
    return result;
};
// console.log(transpose([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
// console.log(transpose([[1, 2, 3], [4, 5, 6]]));
// console.log(transpose([[1, 2, 3]]));

function transpose_withSquareMatrix(matrix: number[][]): number[][] {
    let n = matrix.length;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (i === j) continue;
            let temp = matrix[j][i];
            matrix[j][i] = matrix[i][j];
            matrix[i][j] = temp;
        }
    }
    return matrix;
};

console.log(transpose_withSquareMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
console.log(transpose_withSquareMatrix([[1, 2, 3, 12], [4, 5, 6, 14], [7, 8, 9, 16], [77, 88, 99, 166]]));