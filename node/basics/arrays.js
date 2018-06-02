/* 
  Arrays
  For more information:
  https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays
*/

// log a few new lines at the beginning to make our output easier to read
console.log('\n');

// set a variable to equal an array of strings
let migos = ['Takeoff', 'Quavo', 'Offset'];
console.log('Migos Array:');
console.log(migos);

// get an item from the array
// the array index(order number) can be used to get an item from an array
// * Array indices start at zero not one
console.log(`Array Index 0: ${migos[0]}`); // output: Takeoff
console.log(`Array Index 1: ${migos[1]}`); // output: Quavo
console.log(`Array Index 2: ${migos[2]}\n`); // output: Offset + new line


/*
  Array Methods
  Arrays by default have additional functionality built in
*/


// Array Length - Returns the number of items in our array
console.log(`Array Length: ${migos.length}\n`); // output: 3 + new line


// Remove From End Of Array
// The pop method allows us to remove an item from the end of our array
migos.pop();
console.log('Array After Array.pop():'); 
console.log(migos); // output: [ 'Takeoff', 'Quavo' ]
console.log(''); // new line - console.log() prints to new line by default

// Add To End Of Array
// The push method allows us to add an item to the end of our array
migos.push('Offset');
console.log('Array After Array.push():'); 
console.log(migos); // output: [ 'Takeoff', 'Quavo', 'Offset' ]
console.log(''); // new line 

// Remove From Start Of Array
// The shift method allows us to remove an item from the start of our array
migos.shift();
console.log('Array After Array.shift():'); 
console.log(migos); // output: [ 'Quavo', 'Offset' ]
console.log(''); // new line 

// Add To Start Of Array
// The unshift method allows us to add an item to the end of our array
migos.unshift('Takeoff');
console.log('Array After Array.unshift():');
console.log(migos); // output: [ 'Takeoff', 'Quavo', 'Offset' ]
console.log(''); // new line 

// Convert Array To String

/*
  Method 1: Join
  The join method allows us to concatenate(join together) our array items into a string
  The ', ' string is our separator
*/  
let migosStringComma = migos.join(', ');
console.log('Array After Array.join(\', \'):'); 
console.log(migosStringComma); // output: Takeoff, Quavo, Offset
console.log(''); // new line 

let migosStringPipes = migos.join('||');
console.log('Array After Array.join(\'||\'):');
console.log(migosStringPipes); // output: Takeoff||Quavo||Offset
console.log(''); // new line 
/*
  Method 2: toString
  The toString method is like the join method but does not ask for a separator
*/
let migosToString = migos.toString();
console.log('Array After Array.toString():');
console.log(migosToString); // output: Takeoff,Quavo,Offset
console.log(''); // new line 

// Convert String To Array
// Splits String into an Array by a separator 
migos = migosToString.split(',');
console.log('Array After Array.split(\',\'):');
console.log(migos); // output: [ 'Takeoff', 'Quavo', 'Offset' ]
console.log(''); // new line

// log a few new lines at the end to make our output easier to read
console.log('\n');

