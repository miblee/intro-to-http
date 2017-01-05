var http = require('http');

var hostname = '127.0.0.1';
var port = 3000;


// if CLIENT requests '/' send back the index.html file
// otherse send back 404 page not found
var fs = require('fs');


var server = http.createServer(function(request, response) {
  console.log('Incoming ' + request.method + 'request' + request.url);
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/html');
  if (request.url==="/goodbye"){
    response.write('<h1>goodbye</h1>')
  } else if (request.url==='/') {
    fs.readFile('./index.html', 'utf-8', function(err, data){
      if(err) throw err;
      response.statusCode = 200;
      response.write(data);
      response.end();
    });
  } else {
    response.statusCode = 404;
    response.write('Not Found!');
    response.end();
  };
  // response.end();
});

server.listen(port, hostname, function(){
  console.log('Server running at http://' + hostname + ':' + port);
});
