/* 
  Variables
  For more information:
  https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics#Variables
*/

// log a few new lines at the beginning to make our output easier to read
console.log('\n\n');

// set a variable using var - older syntax
// we are setting the value to a String(text) data type which requires quotes
var migoOne = 'Offset';
// log to console
console.log(migoOne); // output: Offset

// set a variable using let - newer syntax that indicates the value can change.
// we can also use double quotes for a String
let migoTwo = "Quavo";
// log to console
console.log(migoTwo); // output: Quavo

// set a constant using const - a variable that's value cannot change 
const migoThree = 'Takeoff';
// log to console
console.log(migoThree); // output: Takeoff

// set a constant to a Number data type which has no quotes.
const memberCount = 3;
// log to console
console.log(memberCount); // output: 3

// join together using a template string
// template strings use backticks(``) instead of quotes
// backticks are typically just to the left of your '1' key
// Variables can be used inside of template strings when wrapped in ${}
let message = `Migos - ${memberCount} Members - ${migoOne}, ${migoTwo}, ${migoThree}`;
// log to console
console.log(message); // output: Migos - 3 Members - Offset, Quavo, Takeoff

// log a few new lines at the end to make our output easier to read
console.log('\n\n');
