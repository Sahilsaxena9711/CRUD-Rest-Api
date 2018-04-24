var express = require('express');
var router = require('./routes/api');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect('mongodb://sahil:saxena@ds055842.mlab.com:55842/proj-api');
mongoose.Promise = global.Promise;

var app = express();

app.use(express.static('public'));
app.use(bodyParser.json());
app.use('/api',router);
app.use(function(err,req,res,next){
    res.status(422).send({error : err.message})
})


app.listen(process.env.PORT || 4000, function(){
    console.log("Api's are hot at http://localhost:4000");
    
})