///dependencies
var express = require('express');
var bodyParser = require('body-parser')
var app = express();
var path = require('path');

console.log("Hello World");
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));
var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://sharontzur:sharontzur@ds055862.mongolab.com:55862/my-db');
mongoose.connection.once('connected', function() {
    console.log("Database connected successfully")
});


app.use(express.static(__dirname + '/public'));



///start
var TodoSchema = new mongoose.Schema({
    name: String,
    completed: Boolean,
    note: String,
    updated_at: { type: Date, default: Date.now }
});
 var Todo = mongoose.model('Todo', TodoSchema);


app.get('/todos', function (req, res, next) {

    Todo.find(function (err, todos) {
        if (err) return console.error(err);
        res.send(todos)
    });

});


app.post('/todo', function (req,res){
    var todo = new Todo({name: req.body.name, completed: req.body.completed, note: req.body.note});
    todo.save(function(err){
        if(err)
            console.log(err);
        else
            console.log(todo);
    });


});


app.listen(80, function() {
    console.log('ready to go!');
});




