var express = require("express");
var add = require("./add.js");
var app = express();

app.get('/', function(req, res) {
   res.send("usage: add?a=1&b=2"); 
});

app.get('/add', function(req, res){
    res.send(add.add(req.param('a'), req.param('b')).toString());
});

app.listen(process.env.PORT, function(){
    console.log("Server started on port:" + process.env.PORT); 
});