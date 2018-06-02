/* 
  Functions
  For more information:
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions
*/

// functions can be assigned to a variable but the variable 
// must be defined before reference
let nl = function() {
	// we want to avoid using console.log
	// instead we will use process.stdout.write() which 
	// writes to our console without a new line by default
	return process.stdout.write('\n');
}

// functions using the function declaration can be 
// called in the code before they are defined
log('Hello World!');
nl()
nl()

// our own console.log()
function log(message) {
	nl()
	process.stdout.write(`${message}`)
};

