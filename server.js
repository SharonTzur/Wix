var express = require('express');

var app = express();

app.use(express.static(__dirname + '/public'));

console.log("Hello World");

var mongoose = require('mongoose');

//connecting local mongodb database named test
var db = mongoose.connect('mongodb://<sharontzur>:<sharontzur>@ds055862.mongolab.com:55862/my-db');

//testing connectivity
mongoose.connection.once('connected', function() {
    console.log("Database connected successfully");
    console.log(db.shows.find());
});
/*

var url = 'mongodb://localhost:27017/test';
MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    console.log("Connected correctly to server.");
    db.close();
});

app.listen(8080, function() {
    console.log('ready to go!');
});

*/




/*
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
*/

/*

require("http").createServer(function(request, response){
    response.writeHeader(200, {"Content-Type": "text/plain"});
    response.write("Hello World!");
    response.end();
}).listen(8080);*/
