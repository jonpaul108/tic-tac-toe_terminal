const prompt = require('prompt');
const logic = require('./gameLogic.js');

// var schema = {
//   properties: {
//     board: [[0, 0, 0],
//             [0, 0, 0],
//             [0, 0, 0]]
//   }
// }

const board= [[0, 0, 0],
              [0, 0, 0],
              [0, 0, 0]];
const player1 = 'X';
const player2 = 'O';
let win = false;
let currentPlayer = player1;

prompt.start();

  prompt.get(['Xmove','Ymove'], (err, result) => {
    board[result.Xmove][result.Ymove] = currentPlayer;
    console.log(result.Xmove, result.Ymove);
    console.log(board);
    win = logic.checkForWin(board, currentPlayer);
    console.log('win:', win);
    if (currentPlayer === player1) {
      currentPlayer = player2;
    } else {
      currentPlayer = player1;
    }
    console.log(`${currentPlayer}\'s turn`);
    prompt.get(['Xmove','Ymove'], (err, result) => {
      board[result.Xmove][result.Ymove] = currentPlayer;
      console.log(result.Xmove, result.Ymove);
      console.log(board);
      win = logic.checkForWin(board, currentPlayer);
      console.log('win:', win);
      if (currentPlayer === player1) {
        currentPlayer = player2;
      } else {
        currentPlayer = player1;
      }
      console.log(`${currentPlayer}\'s turn`);
      prompt.get(['Xmove','Ymove'], (err, result) => {
        board[result.Xmove][result.Ymove] = currentPlayer;
        console.log(result.Xmove, result.Ymove);
        console.log(board);
        win = logic.checkForWin(board, currentPlayer);
        console.log('win:', win);
        if (currentPlayer === player1) {
          currentPlayer = player2;
        } else {
          currentPlayer = player1;
        }
        console.log(`${currentPlayer}\'s turn`);
        prompt.get(['Xmove','Ymove'], (err, result) => {
          board[result.Xmove][result.Ymove] = currentPlayer;
          console.log(result.Xmove, result.Ymove);
          console.log(board);
          win = logic.checkForWin(board, currentPlayer);
          console.log('win:', win);
          if (currentPlayer === player1) {
            currentPlayer = player2;
          } else {
            currentPlayer = player1;
          }
          console.log(`${currentPlayer}\'s turn`);
          prompt.get(['Xmove','Ymove'], (err, result) => {
            board[result.Xmove][result.Ymove] = currentPlayer;
            console.log(result.Xmove, result.Ymove);
            console.log(board);
            win = logic.checkForWin(board, currentPlayer);
            console.log('win:', win);
            if (currentPlayer === player1) {
              currentPlayer = player2;
            } else {
              currentPlayer = player1;
            }
            console.log(`${currentPlayer}\'s turn`);
            prompt.get(['Xmove','Ymove'], (err, result) => {
              board[result.Xmove][result.Ymove] = currentPlayer;
              console.log(result.Xmove, result.Ymove);
              console.log(board);
              win = logic.checkForWin(board, currentPlayer);
              console.log('win:', win);
              if (currentPlayer === player1) {
                currentPlayer = player2;
              } else {
                currentPlayer = player1;
              }
              console.log(`${currentPlayer}\'s turn`);
              prompt.get(['Xmove','Ymove'], (err, result) => {
                board[result.Xmove][result.Ymove] = currentPlayer;
                console.log(result.Xmove, result.Ymove);
                console.log(board);
                win = logic.checkForWin(board, currentPlayer);
                console.log('win:', win);
                if (currentPlayer === player1) {
                  currentPlayer = player2;
                } else {
                  currentPlayer = player1;
                }
                console.log(`${currentPlayer}\'s turn`);
                prompt.get(['Xmove','Ymove'], (err, result) => {
                  board[result.Xmove][result.Ymove] = currentPlayer;
                  console.log(result.Xmove, result.Ymove);
                  console.log(board);
                  win = logic.checkForWin(board, currentPlayer);
                  console.log('win:', win);
                  if (currentPlayer === player1) {
                    currentPlayer = player2;
                  } else {
                    currentPlayer = player1;
                  }
                  console.log(`${currentPlayer}\'s turn`);
                  prompt.get(['Xmove','Ymove'], (err, result) => {
                    board[result.Xmove][result.Ymove] = currentPlayer;
                    console.log(result.Xmove, result.Ymove);
                    console.log(board);
                    win = logic.checkForWin(board, currentPlayer);
                    console.log('win:', win);
                    if (currentPlayer === player1) {
                      currentPlayer = player2;
                    } else {
                      currentPlayer = player1;
                    }
                    console.log(`${currentPlayer}\'s turn`);
                  });
                });
              });
            });
          });
        });
      });
    });


  });
