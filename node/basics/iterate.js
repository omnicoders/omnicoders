/* 
  Iteration and Loops
  For more information:
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration
*/

let firstNames = ['Sierk', 'Noah', 'Matthew', 'Robb', 'Jenny', 'Steve'];

// for loop - synchronous
// for(initial; condition; increment){}
// initial: we set a variable to hold the array index
// condition: we set the loop to run as long as the index is less than the array length
// increment: we increment the array index 
for(let i = 0; i < firstNames.length; i++){
	console.log(firstNames[i]);
}

// forEach loop - asynchronous es5
firstNames.forEach(function(name){
	console.log(name);
});

// forEach loop - asynchronous es6
firstNames.forEach((name) => {
	console.log(name);
});

// map - asynchronous es5
// call function on each element of an Array
firstNames.map(function(name){
	console.log(name);
});

// map - asynchronous es6
// call function on each element of an Array
firstNames.map((name) => {
	console.log(name);
});