function isSafe(board, row, column, number) {
  for (let i = 0; i < board.length; i++) {
    if (board[i][column] == number) {
      return false;
    }
  }
  for (let i = 0; i < board[row].length; i++) {
    if (board[row][i] == number) {
      return false;
    }
  }
  var srow = Math.floor(row / 3) * 3;
  var scol = Math.floor(column / 3) * 3;
  for (let i = srow; i < srow + 3; i++) {
    for (var j = scol; j < scol + 3; j++) {
      if (board[i][j] == number) {
        return false;
      }
    }
  }
  return true;
}

function solveSudoku(arr, row, column) {
  if (row == arr.length) {
    return true;
  }
  let nrow = 0,
    ncol = 0;
  if (column == arr[0].length - 1) {
    nrow = row + 1;
    ncol = 0;
  } else {
    nrow = row;
    ncol = column + 1;
  }
  if (arr[row][column] != 0) {
    if (solveSudoku(arr, nrow, ncol)) {
      return true;
    }
  } else {
    for (let i = 1; i <= 9; i++) {
      if (isSafe(arr, row, column, i)) {
        arr[row][column] = i;
        if (solveSudoku(arr, nrow, ncol)) {
          return true;
        } else {
          arr[row][column] = 0;
        }
      }
    }
  }
  return false;
}

function solver() {
  var board = new Array(9);
  for (var i = 0; i < board.length; i++) {
    board[i] = new Array(9);
  }

  for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {
      var temp = "row" + i + "column" + j;
      board[i - 1][j - 1] = Number(document.getElementById(temp).value);
    }
  }

  solveSudoku(board, 0, 0);
  for (let i = 1; i <= board.length; i++) {
    for (let j = 1; j <= board.length; j++) {
      var temp = "row" + i + "column" + j;
      document.getElementById(temp).value = board[i - 1][j - 1];
    }
  }
}
