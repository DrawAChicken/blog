var express = require('express');
var router = express.Router();
router.use('/', function(req, res) {
    res.render('main',{
        name: 'home'
    });
});

module.exports = router;