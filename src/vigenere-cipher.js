const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
  this.direct = direct;
}
encrypt(message, key) {
  if (!message || !key || message.trim() === '' || key.trim() === '') {
    throw new Error('Incorrect arguments!');
  }
  const uppercaseMessage = message.toUpperCase();
  const uppercaseKey = key.toUpperCase();
  let result = [];
  let keyIndex = 0;
  for (let i = 0; i < message.length; i++) {
    let char = uppercaseMessage[i];
    if (/[A-Z]/.test(char)) {
      const shift = uppercaseKey.charCodeAt(keyIndex % uppercaseKey.length) - 65;
      const code = (uppercaseMessage.charCodeAt(i) + shift - 65)  % 26 + 65;
      result.push(String.fromCharCode(code));
      keyIndex++; 
    }else result.push(char);
  }
  return this.direct ? result.join('') : result.reverse().join('');
}
decrypt(message, key) {
  if (!message || !key || message.trim() === '' || key.trim() === '') {
    throw new Error('Incorrect arguments!');
  }
  const uppercaseMessage = message.toUpperCase();
  const uppercaseKey = key.toUpperCase();
  let result = [];
  let keyIndex = 0;
  for (let i = 0; i < message.length; i++) {
    let char = message[i];
    if (/[A-Z]/.test(char)) {
      const shift = uppercaseKey.charCodeAt(keyIndex % uppercaseKey.length) - 65;
      const code = (uppercaseMessage.charCodeAt(i) - shift - 65 + 26)  % 26 + 65;
      result.push(String.fromCharCode(code));
      keyIndex++; 
    }else result.push(char);
  }
  return this.direct ? result.join('') : result.reverse().join('');
}
}

module.exports = {
  VigenereCipheringMachine
};
