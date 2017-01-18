var express = require('express');
var app = express();
//数据库
var db=require('../modules/db');

app.get('/', function(req, res) {
    db.findOne('myblog',{},function (err,arr) {
        res.render('hello',{
            arr:arr
        });
    });
});

module.exports = app;
