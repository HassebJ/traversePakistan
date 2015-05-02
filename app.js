/**
 * Created by usman on 4/19/15.
 */
console.log("Traverse Pakistan Server initiated.");
//Instantiate Database;
var database = require('./database/connection');

var fs = require("fs");
// Bootstrap models
fs.readdirSync(__dirname + '/model').forEach(function (file) {
  if (~file.indexOf('.js')) require(__dirname + '/model/' + file);
});

var express = require("express");
var app = express();

//configure express;
require("./config/express") (app );

//config routes;

require("./config/routes") (app);

app.listen(3000, function(){
  console.log("Server listen at :" + 3000);
});
