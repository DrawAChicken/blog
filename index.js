var path = require('path');
var express = require('express');
var app = express();
//路由
var helloRouter = require('./routes/hello');
var homeRouter = require('./routes/hemo');
var contRouter = require('./routes/cont');
var searchRouter = require('./routes/search');
var listRouter = require('./routes/list');

app.set('views', path.join(__dirname, 'views'));// 设置存放模板文件的目录
app.set('view engine', 'ejs');// 设置模板引擎为 ejs


//路由
app.use(express.static("./public"));
app.use('/', helloRouter);
app.use('/home', homeRouter);
app.use('/cont', contRouter);
app.get('/search', searchRouter);
app.get('/list', listRouter);

app.listen(8888);