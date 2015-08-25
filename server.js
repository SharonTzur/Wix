/*
var express = require('express');

var app = express();

app.use(express.static(__dirname + '/public'));

console.log("Hello World");

app.listen(80, function() {
    console.log('ready to go!');
});

console.log("Hello World 2");


*/


var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello World!');
});

var server = app.listen(8080, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});

/*

require("http").createServer(function(request, response){
    response.writeHeader(200, {"Content-Type": "text/plain"});
    response.write("Hello World!");
    response.end();
}).listen(8080);*/
