var express = require('express');
var router = express.Router();

router.use('/', function(req, res) {
    res.render('search',{
        name: 'list',
        data:{
            title:'home'
        }
    });
});

module.exports = router;
