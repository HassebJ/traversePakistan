/**
 * Created by usman on 4/19/15.
 */
var mongoose= require('mongoose');
mongoose.connect("mongodb://localhost/traverse_pakistan_db");
var db= mongoose.connection;
db.on('error',console.error.bind(console, 'connection error:'));
db.on('open', function () {
   console.log('Connection with database successful!')
});
db.on('disconnected', function(){
   mongoose.connect("mongodb://localhost/traverse_pakistan_db");
});
