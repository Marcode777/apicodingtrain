console.log('this is the server.js file triggering');

var express = require('express'); // what this is doing is creating a variable that will contain express, express is a whole program wrapped in a function
var app = express(); // what this is doing is that it is actually invoking this function, and suddenly we get this application, it's doing all these things behind the scenes, it's amazing
var server = app.listen(8000, listening); // this creates a variable that essentially listens for incoming connectiosn, in this case it is listening for incoming connections at the 8000 port, the 'listening' parameter, which is actually a callback, is not necessary, but it's there to confirm because if it triggers, that means it's working

function listening(){
  console.log('the server is indeed listening on port 8000');
}

console.log('this is the server.js file triggering!!!!!');

app.use(express.static('public')); 

app.get('/search/:flower/:num', sendFlower); // the idea here is that for whoever is making a request to this route, the function sendFlower will be performed. The sendFlower function has two parameters or arguments in it, a request and a response. Every API interaction has a request and a response, all the information about the user or whoever is making a request to the API, is contained in the variable request, the server, then sends back a response, all the information about the server's response, is in that variable response. Now if we hit this specific route '/flower', we should get the appropriate response. Remember that the server must be restarted in order to render the change.

function sendFlower(request, response) {
  var data = request.params;
  var num = data.num;
  var reply = '';
  for(var i = 0; i < num ; i++){
    reply += 'i love ' + data.flower + ' too!'
  }
  response.send(reply);
}


















