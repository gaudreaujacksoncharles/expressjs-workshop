var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

// This creates a web server that can listen to /hello and respond with some html.
app.get('/hello', function(request, respond) {
  respond.send('<h1>Hello world!</h1>');
});

/* YOU DON'T HAVE TO CHANGE ANYTHING BELOW THIS LINE :) */

// Boilerplate code to start up the web server
var server = app.listen(process.env.PORT, process.env.IP, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
