const fetch = require('node-fetch');

fetch('https://jsonplaceholder.typicode.com/posts/1')
.then(res => res.json())
.then(json => console.log(json));