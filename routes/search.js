var express = require('express');
var app = express();
//数据库
var db=require('../modules/db');

app.use('/:id', function(req, res) {
    var info=req.params.id;
    var k=info.split('=')[0];
    var v=info.split('=')[1];
    var a={$regex:v,$options:"$i"};
    var obj={};
    obj[k]=a;

    db.findOne('myblog',obj,function (err,arr) {
        res.render('search',{
            arr:arr,
            name: 'list',
            data:{
                title:v
            }
        });
    });
});

module.exports = app;
