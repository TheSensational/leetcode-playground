const countBattleships = (board) => {
  // let m = board.length;
  // if (!m) return 0;
  // let n = board[0].length;
  // let count = 0;

  // for (let i = 0; i < m; i++) {
  //   for (let j = 0; j < n; j++) {
  //     if (board[i][j] === '.') continue;
  //     if (i > 0 && board[i - 1][j] === 'X') continue;
  //     if (j > 0 && board[i][j - 1] === 'X') continue;
  //     count++;
  //   }
  // }

  // return count;
  let count = 0;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (
        board[i][j] === 'X' &&
        board[i][j - 1] !== 'X' &&
        (!board[i - 1] || board[i - 1][j] !== 'X')
      )
        count++;
    }
  }
  return count;
};
