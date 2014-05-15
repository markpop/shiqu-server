'use strict';

angular.module('zhihuAngularApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngTouch',
  'ngRoute',
  'geolocation',
  'btford.socket-io'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/dist/views/index.html',
        controller: 'IndexCtrl'
      })
      .when('/article/:id', {
        templateUrl: '/dist/views/article.html',
        controller: 'ArticleCtrl'
      })
      .when('/setting', {
        templateUrl: '/dist/views/setting.html',
        controller: 'SettingCtrl'
      })
      .when('/comment/:id', {
        templateUrl: '/dist/views/comment.html',
        controller: 'CommentCtrl'
      })
      .when('/room', {
        templateUrl: '/dist/views/room.html',
        controller: 'RoomCtrl'
      })
      .when('/chat/:id', {
        templateUrl: '/dist/views/chat.html',
        controller: 'ChatCtrl'
      })
      .when('/user', {
        templateUrl: '/dist/views/user.html',
        controller: 'UserCtrl'
      })
      .when('/collection', {
        templateUrl: '/dist/views/collection.html',
        controller: 'CollectionCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
