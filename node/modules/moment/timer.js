const moment = require('moment');

let count = 0;

getCurrentTime();
setInterval(getCurrentTime, 1000);

function getCurrentTime() {
	if(count > 10){ 
		console.log('complete');
		process.exit();
	}
	let now = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
	console.log(`${now} - ${count}s`);
	count++;
}