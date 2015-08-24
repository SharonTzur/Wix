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

var server = app.listen(80, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});