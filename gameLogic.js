module.exports.checkForWin = (board, player) => {
  let win = false;
  win = checkRows(board, player);
  return win;

}

const checkRows = (board, player) => {
  for (let i = 0; i < board.length; i ++) {
    if (board[i][0] === player && board[i][1] === player && board[i][2] === player)
      return true;
  }
  return false;
}
