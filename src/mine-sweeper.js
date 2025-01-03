const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  
  let cols = matrix.length;
  let rows = matrix[0].length;
  let result = Array.from({ length: cols }, () => Array(rows).fill(0));
  for(let i = 0; i < cols; i++) {
    for(let j = 0; j < rows; j++) {
      let count = 0;
      for(let x = -1; x <= 1; x++) {
        for (let y = -1; y <= 1; y++) {
          if (x === 0 && y === 0) continue;

          let ix = i + x;
          let jy = j + y;

          if (ix >= 0 && ix < cols && jy >= 0 && jy < rows) {
            if (matrix[ix][jy]) count++;
          }
        }
      }
      result[i][j] = count;
    }
  }
  return result;
}

module.exports = {
  minesweeper
};
