var express = require('express');
var router = express.Router();
//数据库
var db=require('../modules/db');



router.use('/', function(req, res) {
    db.findOne('myblog',{},function (err,arr) {
        res.render('main',{
            arr:arr,
            name: 'home',
            data:{
                title:'欢迎来到slb的博客'
            }
        });
    });
});

module.exports = router;
