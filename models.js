var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Article = mongoose.model('Article', {
	img: String,
	title: String,
	content: String,
	done: Number,
	user: {
		subscribe: Number, 
		openid: String, 
		nickname: String, 
		sex: Number, 
		language: String, 
		city: String, 
		province: String, 
		country: String, 
		headimgurl: String, 
		subscribe_time: Number
	}
});
var Comment = mongoose.model('Comment', {
	article_id: String,
	time: Number,
	content: String,
	good: Number,
	user: {
		subscribe: Number, 
		openid: String, 
		nickname: String, 
		sex: Number, 
		language: String, 
		city: String, 
		province: String, 
		country: String, 
		headimgurl: String, 
		subscribe_time: Number
	}
});
var Collection = mongoose.model('Collection', {
	openid: String,
  _id: String,
  img: String,
  title: String,
});
var User = mongoose.model('User', {
	subscribe: Number, 
	openid: String, 
	nickname: String, 
	sex: Number, 
	language: String, 
	city: String, 
	province: String, 
	country: String, 
	headimgurl: String, 
	subscribe_time: Number
});

exports.Article = Article;
exports.Comment = Comment;
exports.Collection = Collection;
exports.User =User;