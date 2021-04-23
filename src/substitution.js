// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    if(!alphabet || alphabet.length !== 26) return false;
  const alphabetTestArray = alphabet.split("");
  for (let letter of alphabetTestArray) {
    let letterCount = alphabetTestArray.filter(
      (character) => character === letter).length;
      if(letterCount > 1) return false;
  }
    const normalAlphabet = "abcdefghijklmnopqrstuvwxyz";
    const substitutionAlphabet = alphabet;
    input = input.toLowerCase();
    const splitArray = input.split("");
    const encodedArray = [];

//decoding
if(!encode) {
  for (let character of splitArray) {
    if(!substitutionAlphabet.includes(character)) {
  
      encodedArray.push(character);
    } else {
      const foundIndex = substitutionAlphabet.indexOf(character);
      const foundCharacter = normalAlphabet[foundIndex];
      encodedArray.push(foundCharacter);
    }
  }
} else {

//encoding
  
    for (let character of splitArray) {
      if(!normalAlphabet.includes(character)) {
        encodedArray.push(character);
      } else {
        const foundIndex = normalAlphabet.indexOf(character);
        const foundCharacter = substitutionAlphabet[foundIndex];
        encodedArray.push(foundCharacter);
      }
    }
  }
    return encodedArray.join("");
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
