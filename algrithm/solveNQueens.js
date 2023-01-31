/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N 皇后
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
 var solveNQueens = function (n) {
  const res = [];
  const board = new Array(n).fill(0).map(() => new Array(n).fill('.'));

  const isValid = (row, col, board) => {
    //同一列冲突
    for(let i = 0; i < n; i++){
      if(board[i][col] === 'Q'){
        return false;
      }
    }

    //斜左上对角线冲突
    for(let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--){
      if(board[i][j] === 'Q'){
        return false;
      }
    }
    
    //斜右上对角线冲突
    for(let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++){
      if(board[i][j] === 'Q'){
        return false;
      }
    }

    return true;
  };

  //按要求输出
  const transform = (board)=>{
    let chessBoardBack = []
    board.forEach(row => {
        let rowStr = ''
        row.forEach(value => {
            rowStr += value
        })
        chessBoardBack.push(rowStr)
    })

    return chessBoardBack
  }

  const backTracing = (row, board) => {
    //row从0开始，等于n就是每一行都执行过了
    if (row === n) {
      res.push(transform(board));
      return res;
    }

    //循环当前行row的每一列
    for (let j = 0; j < n; j++) {
      if (isValid(row, j, board)) {
        board[row][j] = 'Q';
        //继续下一行
        backTracing(row + 1, board);
        //回溯
        board[row][j] = '.';
      }
    }
  };

  backTracing(0, board);

  return res;
};
// @lc code=end
