var express = require('express');

var app = express();

app.use(express.static(__dirname + '/public'));

console.log("Hello World");

app.listen(80, function() {
    console.log('ready to go!');
});

console.log("Hello World 2");


