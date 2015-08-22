var express = require('express'),
    app = express(),
    routes = require('./routes')(app),
    server = require('./server')(app),
    mustacheExpress = require('mustache-express');

app.engine('mustache', mustacheExpress());          // register file extension mustache
app.set('view engine', 'mustache');                 // register file extension for partials
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public')); // set static folder

module.exports = app;
