var express = require('express');

var app = express();

app.use(express.static(__dirname + '/public'));

console.log("Hello World");

var mongoose = require('mongoose');

//connecting local mongodb database named test
var db = mongoose.connect('mongodb://sharontzur:sharontzur@ds055862.mongolab.com:55862/my-db');
console.log(db);
var contacts = db.Contacts.find();
console.log(contacts);

//testing connectivity
mongoose.connection.once('connected', function() {
    console.log("Database connected successfully");
});