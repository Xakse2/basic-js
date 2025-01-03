const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  str = String(str);
  const addition = options.addition !== undefined ? String(options.addition) : '';
  const addArray = new Array(options.additionRepeatTimes || 1)
  .fill(addition)
  .join(options.additionSeparator || "|");
  return new Array(options.repeatTimes || 1)
  .fill(str + addArray)
  .join(options.separator || "+");
}

module.exports = {
  repeater
};
