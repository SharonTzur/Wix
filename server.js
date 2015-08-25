var express = require('express');

var app = express();

app.use(express.static(__dirname + '/public'));

console.log("Hello World");

var mongoose = require('mongoose');

//connecting local mongodb database named test
var db = mongoose.connect('mongodb://sharontzur:sharontzur@ds055862.mongolab.com:55862/my-db');
console.log(db);

//testing connectivity
mongoose.connection.once('connected', function() {
    console.log("Database connected successfully");
});


app.listen(8080, function() {
    console.log('ready to go!');
});