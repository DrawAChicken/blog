var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.render('hello',{
        name: req.pathname
    });
});

module.exports = app;