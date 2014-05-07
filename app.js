
/**
 * Module dependencies.
 */

var express = require('express');
// var routes = require('./routes');
// var user = require('./routes/user');
var http = require('http');
var url = require('url');
var querystring = require('querystring');
var path = require('path');
var wechat = require('wechat');
var mongoose = require('mongoose');
var config = require('./config');
var models = require('./models');

var app = express();
var api = new wechat.API(config.wechat.appID, config.wechat.appsecret);

mongoose.connect('mongodb://localhost/wechat-2014');

// all environments
app.engine('.html', require('ejs').__express);
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'public/app'));
app.set('view engine', 'html');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public/app')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// app.get('/', routes.index);
// app.get('/users', user.list);
app.get('/', function (req, res) {
	var params = url.parse(req.url).query;
	var openid = querystring.parse(params).openid;
	api.getUser(openid, function (err, data) {
		res.render('index', {user: data});
	});
});
app.get('/api/index', function (req, res) {
	var Article = models.Article;
	Article.find().select('_id title img').exec(function (err, articles) {
		if (err)
			res.json({code: 500, msg: err});
		else
			res.json({code: 200, data: articles});
	});
});
app.get('/api/article/:id', function (req, res) {
	var Article = models.Article;
	Article.findOne({_id: req.params.id, done: 1},function (err, article) {
		if (err)
			res.json({code: 500, msg: err});
		else
			res.json({code: 200, data: article});
  });
});
app.get('/api/comment/:id', function (req, res) {
	var Comment = models.Comment;
	Comment.find({article_id: req.params.id}, function (err, comments) {
		if (err)
			res.json({code: 500, msg: err});
		else
			res.json({code: 200, data: comments});
	});
});
app.post('/api/comment', function (req, res) {
	var Comment = models.Comment;
	Comment.create(req.body, function (err, Comment) {
		if (err)
			res.json({code: 500, msg: err});
		else
			res.json({code: 201, msg: 'create comment success'});
	});

	// var postData = "";

 //  req.setEncoding("utf8");

 //  req.addListener("data", function(postDataChunk) {
 //    postData += postDataChunk;
 //    console.log("Received POST data chunk '"+
 //    postDataChunk + "'.");
 //  });

 //  req.addListener("end", function() {
 //    console.log(postData);
 //  });


});

var server = http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

var io = require('socket.io').listen(server);
io.sockets.on('connection', function (socket) {
	socket.on('message_to_server', function (data) {
		io.sockets.emit('message_to_client', data);
	});
});
