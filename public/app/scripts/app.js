'use strict';

angular.module('zhihuAngularApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngTouch',
  'ngRoute',
  'btford.socket-io'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/app/views/index.html',
        controller: 'IndexCtrl'
      })
      .when('/article/:id', {
        templateUrl: '/app/views/article.html',
        controller: 'ArticleCtrl'
      })
      .when('/setting', {
        templateUrl: '/app/views/setting.html',
        controller: 'SettingCtrl'
      })
      .when('/comment/:id', {
        templateUrl: '/app/views/comment.html',
        controller: 'CommentCtrl'
      })
      .when('/room', {
        templateUrl: '/app/views/room.html',
        controller: 'RoomCtrl'
      })
      .when('/chat/:id', {
        templateUrl: '/app/views/chat.html',
        controller: 'ChatCtrl'
      })
      .when('/user', {
        templateUrl: '/app/views/user.html',
        controller: 'UserCtrl'
      })
      .when('/collection', {
        templateUrl: '/app/views/collection.html',
        controller: 'CollectionCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
