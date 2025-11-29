function isValidSudoku(board: string[][]) {
  //search on x axis
  for (const row of board) {
    const unq = new Set();
    for (const num of row) {
      if (num === ".") continue;
      else if (unq.has(num)) {
                console.log("row,num", row, num);
        return false;}
      else unq.add(num);
    }
  }

  //search on y axis
  for (let row = 0; row < 9; row++) {
    const unq = new Set();
    for (let col = 0; col < 9; col++) {
      const num = board[col][row];
      if (num === ".") continue;
      else if (unq.has(num)) {
        console.log("x,y", row, col);
        return false;
      } else unq.add(num);
    }
  }

  //search on block 3x3
  for (let row = 0; row < 9; row += 3) {
    for (let col = 0; col < 9; col += 3) {
      const unq = new Set();

      for (let r = 0; r < 3; r++) {
        for (let c = 0; c < 3; c++) {
          const num = board[row + r][col + c];
          if (num === ".") continue;
          else if (unq.has(num)) {
            console.log("x,y", row + r, col + c);
            return false;
          } else unq.add(num);
        }
      }
    }
  }

  return true;
}

const board = [
  ["1", "2", ".", ".", "3", ".", ".", ".", "."],
  ["4", ".", ".", "5", ".", ".", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", ".", "3"],
  ["5", ".", "9", ".", "6", ".", ".", ".", "4"],
  [".", ".", ".", "8", ".", "3", ".", ".", "5"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  ["9", "8", "2", "6", "5", "7", "3", "4", "1"],
  [".", ".", ".", "4", "1", "9", ".", ".", "8"],
  [".", ".", ".", "2", "3", "8", ".", "7", "9"],
];

console.log(isValidSudoku(board));
