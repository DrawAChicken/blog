var express = require('express');
var app = express();
//数据库
var db=require('../modules/db');
var ObjectID = require('mongodb').ObjectID;


app.use('/:id', function(req, res) {
    db.findOne('myblog',{'_id':ObjectID(req.params.id)},function (err,data) {
        res.render('cont',{
            name:'content',
            data:data[0]
        });
    });

});

module.exports = app;
