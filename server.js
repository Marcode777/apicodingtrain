console.log('this is the server.js file triggering');

var express = require('express');
var app = express();
var server = app.listen(8000, listening);

function listening(){
  console.log('the server is indeed listening on port 8000');
}

console.log('this is the server.js file triggering!!!!!');

app.use(express.static('public'));