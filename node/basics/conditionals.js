/* 
  Conditional Statements
  For more information:
  	if...else:
  	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
  	Ternary Operator:
  	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
*/

let numberOne = 5;
let numberTwo = 7;

// if...else
if(numberOne > numberTwo){
	console.log('numberOne is greater than numberTwo');
} else {
	console.log('numberOne is equal to or less than numberTwo');
}

// if...else if...else
if(numberOne > numberTwo){
	console.log('numberOne is greater than numberTwo');
} else if(numberOne == numberTwo){
	console.log('numberOne is equal to numberTwo');
} else {
	console.log('numberOne is less than numberTwo');
}

// ternary
// statement ? (to do if true) : (to do if false);
let isEqual = numberOne == numberTwo ? true : false;
let isGreaterThan = numberOne > numberTwo ? true : false;
let isLessThan = numberOne < numberTwo ? true : false;

// using logical operators 

// AND '&&'
// is numberOne greater than zero and less than or equal to ten?
let numberOneValid = numberOne > 0 && numberOne <= 10 ? true : false; 
console.log(numberOneValid); // outputs: true

// OR '||'
// is numberOne equal to zero or greater than ten?
let numberOneIsInvalid = numberOne === 0 || numberOne > 10 ? true : false;
console.log(numberOneIsInvalid); // outputs: false

// NOT '!'
// is not true equal to false
console.log(!true == false); // outputs: true
// invert true/false (Boolean) value
console.log(!numberOneValid); // outputs: false