function validSolution(board) {
  let rowCount = 0;
  for (let i = 0; i < board.length; i++) {
    let digs = {};
    for (let j = 0; j < board[i].length; j++) {
      if (
        digs[board[i][j]] ||
        digs[board[i][j]] <= 0 ||
        digs[board[i][j] > 9]
      ) {
        return false;
      }
      digs[board[i][j]] = true;
    }
    if (Object.keys(digs).length === 9) {
      rowCount++;
    } else {
      return false;
    }
  }
  let colCount = 0;
  for (let i = 0; i < board.length; i++) {
    let digs = {};
    for (let j = 0; j < board[i].length; j++) {
      if (
        digs[board[j][i]] ||
        digs[board[j][i]] <= 0 ||
        digs[board[j][i] > 9]
      ) {
        return false;
      }
      digs[board[j][i]] = true;
    }
    if (Object.keys(digs).length === 9) {
      colCount++;
    } else {
      return false;
    }
  }
  let boxCount = 0;
  for (let i = 0; i < board.length; i++) {
    let digs = {};
    let rowInc = 0;
    let colInc = 0;
    if (boxCount === 1) {
      rowInc = 3;
      colInc = 0;
    }
    if (boxCount === 2) {
      rowInc = 6;
      colInc = 0;
    }
    if (boxCount === 3) {
      rowInc = 0;
      colInc = 3;
    }
    if (boxCount === 4) {
      rowInc = 3;
      colInc = 3;
    }
    if (boxCount === 5) {
      rowInc = 6;
      colInc = 3;
    }
    if (boxCount === 6) {
      rowInc = 0;
      colInc = 6;
    }
    if (boxCount === 7) {
      rowInc = 3;
      colInc = 6;
    }
    if (boxCount === 8) {
      rowInc = 6;
      colInc = 6;
    }
    for (let j = 0, k = colInc, x = rowInc; j < board[i].length; j++, x++) {
      if (
        digs[board[k][x]] ||
        digs[board[k][x]] <= 0 ||
        digs[board[k][x] > 9]
      ) {
        return false;
      }
      digs[board[k][x]] = true;
      if (x === 2 || x === 5 || x === 8) {
        k++;
        x = rowInc - 1;
      }
      if (Object.keys(digs).length === 9) {
        boxCount++;
      }
    }
  }
  return boxCount === 9 && colCount === 9 && rowCount === 9;
}
console.log(
  validSolution([
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9],
  ])
); //true

console.log(
  validSolution([
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 0, 3, 4, 8],
    [1, 0, 0, 3, 4, 2, 5, 6, 0],
    [8, 5, 9, 7, 6, 1, 0, 2, 0],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 0, 1, 5, 3, 7, 2, 1, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 0, 0, 4, 8, 1, 1, 7, 9],
  ])
); //false
