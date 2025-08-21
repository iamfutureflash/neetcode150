function numSpecial(mat: number[][]): number {
    let result = 0;
    let m = mat.length;
    let n = mat[0].length;
    for (let row = 0; row < m; row++) {
        for (let col = 0; col < n; col++) {
            if (mat[row][col] === 0) continue;
            else if (mat[row][col] === 1) {
                let v = true;
                let h = true;
                // v
                for (let k = 0; k < n; k++) {
                    if (k !== row && mat[k][col] === 1) { h = false; break; }
                }
                for (let k = 0; k < n; k++) {
                    if (k !== col && mat[row][k] === 1) { v = false; break; }
                }
                // console.log("[v,h]", [v, h]);
                if (v === true && h === true) result++;
            }
        }
    }
    return result;
};
function numSpecial_by_mik1(mat: number[][]): number {
    let result = 0;
    let m = mat.length;
    let n = mat[0].length;
    for (let row = 0; row < m; row++) {
        for (let col = 0; col < n; col++) {
            if (mat[row][col] === 0) continue;
            else if (mat[row][col] === 1) {
                let special = true;
                // check column
                for (let r = 0; r < m; r++) {
                    if (r !== row && mat[r][col] === 1) {
                        special = false;
                        break;
                    }
                }
                // check row
                for (let c = 0; c < n; c++) {
                    if (c !== col && mat[row][c] === 1) {
                        special = false;
                        break;
                    }
                }
                if (special === true) {
                    result++;
                }
            }
        }
    }
    return result;
};
function numSpecial_by_mik2(mat: number[][]): number {
    let m = mat.length;
    let n = mat[0].length;
    let rowCount = new Array(m).fill(0);
    let colCount = new Array(n).fill(0);
    for (let row = 0; row < m; row++) {
        for (let col = 0; col < n; col++) {
            if (mat[row][col] === 1) {
                rowCount[row]++;
                colCount[col]++;
            }
        }
    }
    let result = 0;
    for (let row = 0; row < m; row++) {
        for (let col = 0; col < n; col++) {
            if (mat[row][col] === 0) continue;
            else if (rowCount[row] === 1 && colCount[col] === 1) result++;
        }
    }
    return result;
};
console.log(numSpecial_by_mik2([
    [0, 0, 0],
    [0, 0, 1],
    [1, 0, 0]
]));
console.log(numSpecial_by_mik2(
    [
        [1, 0, 1],
        [0, 0, 0],
        [0, 1, 0]
    ])
);