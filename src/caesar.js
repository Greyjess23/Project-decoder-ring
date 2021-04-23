// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // your solution code here

    // make sure of the paramaters
    if (typeof input !== "string" || input.length === 0) {
      console.log("Please input a string");
    }
    
    if (!shift || shift === 0 || shift < -25 || shift > 25) {
      return false;
    }

    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

    const inputArray = input.toLowerCase().split("");
  

    if (!encode) {
      shift *= -1;
    }
    const newArray = [];

    for (let character of inputArray) {
      if (alphabet.includes(character)) {
        const characterIndex = alphabet.indexOf(character);
        let newIndex = (characterIndex + shift);
         if(newIndex >= 0) {
          newIndex = newIndex%26;
        } else 
        newIndex = newIndex + 26;
        
        
        const shiftedCharacter = alphabet[newIndex];
        newArray.push(shiftedCharacter);
      } else newArray.push(character)
  
      }

    return newArray.join("");
  }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
