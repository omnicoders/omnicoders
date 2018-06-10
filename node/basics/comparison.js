/* 
  Comparison Operators
  For more information:
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators
*/

// single '=' assigns a value
let firstNumber = 3;
let secondNumber = 14;
let secondNumberString = '14';

// '==' is equal to (equality)
console.log(firstNumber == secondNumber); // outputs: false
console.log(secondNumber == secondNumberString); // outputs: true

// '===' is equal to and same type (strict equality)
console.log(secondNumber === secondNumberString); // outputs: false

// '!=' is not equal to (inequality)
console.log(firstNumber != secondNumber); // outputs: true
console.log(secondNumber != secondNumberString); // outputs: false

// '!==' is not equal to and/or same type (strict inequality)
console.log(secondNumber !== secondNumberString); // outputs: true