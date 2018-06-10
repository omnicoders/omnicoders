/* 
  Async Await
  For more information:
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
*/
const fetch = require('node-fetch');

printMessage()
.then((result) => {
	console.log('\n\n' + result + '\n\n');
});


async function printMessage() {
	try {
		console.clear();

		console.log('\nMaking Call 1');
		let one = await fakeApiCall('https://jsonplaceholder.typicode.com/posts/1');
		console.log(one);

		console.log('\nMaking Call 2');
		let two = await fakeApiCall('https://jsonplaceholder.typicode.com/albums/1');
		console.log(two);

		console.log('\nMaking Call 3');
		let three = await fakeApiCall('https://jsonplaceholder.typicode.com/users/1');
		console.log(three);

		return 'complete';
	} catch(error){
		console.log(error);
	}
}

async function fakeApiCall(url) {
	try {
		if(!url){ throw new Error('No URL was provided') }
		let response = await fetch(url);
		return response.json();
	} catch(error){
		return error;
	}	
}
