'use strict';

angular.module('zhihuAngularApp')
  .controller('ArticleCtrl', ['$scope', '$location', '$window', '$routeParams', 'Api', 'Tool', function ($scope, $location, $window, $routeParams, Api, Tool) {
    var $ = $window.Zepto, user = $window.user, id = $routeParams.id;
    $scope.back = function () {
        $location.path('/');
    };
    $scope.share = function (article) {
        // Api.get('/api/collection_num/'+article._id).then(function (data) {
        //     if (data > 0) {
        //         $scope.collected = true;
        //     } else {
        //         $scope.collected = false;
        //     }
        //     $('.article-share').addClass('open');
        // });
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
            Tool.alert('收藏成功');
        });
    };
    $scope.discollect = function (article) {
        Tool.alert('已取消收藏');
    };
    Api.get('/api/comment_num/'+id).then(function (data) {
        $scope.num = data;
    });
    Api.get('/api/article/'+id).then(function (data) {
    // Api.get('../scripts/data/article.json').then(function (data) {
        $scope.data = data;
    });
  }]);