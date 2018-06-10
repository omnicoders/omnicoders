/* 
  Promises
  For more information:
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
*/

let promiseOne = new Promise((resolve, reject) => {
	//setTimeout(reject, 1000, new Error('There was an error...'));
	setTimeout(resolve, 1000, 'foo');
});

promiseOne
.then((message) => {
	return `Message: ${message}`;
})
.then((formattedMessage) => {
	console.log(formattedMessage);
})
.catch((error) => {
	console.log(error);
});

/* Callback Alternative 'Callback Hell' */
/* See http://callbackhell.com/ */