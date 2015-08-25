var express = require('express');

var app = express();

app.use(express.static(__dirname + '/public'));

console.log("Hello World");

var mongoose = require('mongoose');

//connecting local mongodb database named test
var db = mongoose.connect('mongodb://sharontzur:sharontzur@ds055862.mongolab.com:55862/my-db');

//testing connectivity
mongoose.connection.once('connected', function() {
    console.log("Database connected successfully")
});

console.log(db);


var TodoSchema = new mongoose.Schema({
    name: String,
    completed: Boolean,
    note: String,
    updated_at: { type: Date, default: Date.now },
});

 var Todo = mongoose.model('Todo', TodoSchema);


var todo = new Todo({name: 'Master NodeJS', completed: false, note: 'Getting there...'});

 todo.save(function(err){
    if(err)
        console.log(err);
    else
        console.log(todo);
});


Todo.find(function (err, todos) {
    if (err) return console.error(err);
    console.log(todos)
});



app.listen(8080, function() {
    console.log('ready to go!');
});




