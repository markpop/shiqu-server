
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
var socket = require('socket.io');
var config = require('./config');

var app = express();

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
	var api = new wechat.API(config.wechat.appID, config.wechat.appsecret);
	api.getUser(openid, function (err, data) {
		res.render('index', {user: data});
	});
});


var server = http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

var io = socket.listen(server);
io.sockets.on('connection', function (socket) {
	socket.on('message_to_server', function (data) {
		io.sockets.emit('message_to_client', data);
	});
});
