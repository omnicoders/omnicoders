/* 
  Functions
  For more information:
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions
*/

// functions can be assigned to a variable but the variable 
// must be defined before reference
let nl = function() {
	return process.stdout.write('\n');
}

// the ES6 way...
// 'function' is removed and the '=>' is added
let nlesSix = () => { return process.stdout.write('\n') }

// functions using the function declaration can be 
// called in the code before they are defined
log('Hello World!');

// our own console.log()
function log(message) {
	nl()
	process.stdout.write(`${message}`);
	nlesSix()
	nl()	
};

