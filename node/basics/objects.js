/* 
  Objects
  For more information:
  https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics
*/

// log a few new lines at the beginning to make our output easier to read
console.log('\n');

// create an object
// objects are wrapped in curly braces {} and contain key/value pairs.
// values can be just about anything from strings to arrays and other objects
let migo = {
	name: 'Quavo',
	group: 'Migos',
	age: 27,
	realName: 'Quavious Marshall',
	description: function() {
		return `${this.realName} aka ${this.name}, ${this.age}`;
	} 
};

// When logged with String
console.log('Our ' + migo); // output: Our [object Object]

// When logged alone
console.log(migo);
/*
	{ name: 'Quavo',
	  group: 'Migos',
	  age: 27,
	  realName: 'Quavious Marshall',
	  description: [Function: description] }
*/

// Template String
console.log(`Name: ${migo.name}`); // output: Name: Quavo

// Concatenate String
console.log('Group: ' + migo.group); // output: Group: Migos

// Function
console.log(migo.description()); // output: Quavious Marshall aka Quavo, 27

// log a few new lines at the end to make our output easier to read
console.log('\n');