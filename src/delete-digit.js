const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const asd = Array.from(String(n), Number);
  let result = 0;
  for (let i = 0; i < asd.length; i++) {
	const tempNumb = [...asd]
	tempNumb.splice(i, 1)
	const number = parseInt(tempNumb.join(''), 10);
	if (number > result) {
		result = number
	}
}
  return result;
}

module.exports = {
  deleteDigit
};
