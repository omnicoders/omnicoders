/* 
  Callbacks
  For more information:
  https://developer.mozilla.org/en-US/docs/Glossary/Callback_function
*/


// Asynchronous Function Call
// Does not block execution until complete
// Since our function isn't 'blocking' and takes time to receive the callback,
// the functions below can proceed providing better throughput
chatMessage('Our Asynchronous Function Called First', function(error, message) {
	if(error){
		console.log(error);
	} else {
		console.log(message);
	}
});

// Synchronous Function Call
// Block execution until complete
chatMessageSync('Our Synchronous Function Called Second');

console.log('Our Log Called Third');



function chatMessageSync(message) {
	console.log(`Message: ${message}`);
}

function chatMessage(message, callback){
	if(!message){
		let error = new Error('No message was provided');
		callback(error, null);
	} else {
		setTimeout(() => {
			callback(null, `Message: ${message}`);
		}, 2000);
	}
}

