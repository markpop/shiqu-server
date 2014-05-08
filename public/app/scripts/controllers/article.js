'use strict';

angular.module('zhihuAngularApp')
  .controller('ArticleCtrl', ['$scope', '$location', '$window', '$routeParams', 'Api', function ($scope, $location, $window, $routeParams, Api) {
    var $ = $window.Zepto, user = $window.user, id = $routeParams.id;
    $scope.back = function () {
        $location.path('/');
    };
    $scope.share = function () {
        $('.article-share').addClass('open');
    };
    $scope.cancel = function () {
        $('.article-share').removeClass('open');
    };
    $scope.comment = function () {
        $location.path('comment/'+id);
    };
    $scope.collect = function (article) {
        var collection = {
            openid: user.openid,
            _id: article._id,
            img: article.img,
            title: article.title,
        };
        Api.post('/api/collection', collection).then(function () {
            $('.article-share').removeClass('open');
        });
    };
    Api.get('/api/article/'+id).then(function (data) {
    // Api.get('../scripts/data/article.json').then(function (data) {
        $scope.data = data;
    });
  }]);