'use strict';

angular.module('zhihuAngularApp')
  .controller('CommentCtrl', ['$scope', '$location', '$routeParams', '$window', 'Tool', 'Api', function ($scope, $location, $routeParams, $window, Tool, Api) {
    var id = $routeParams.id,
    user = $window.user;
    $scope.back = function () {
    	$location.path('article/'+id);
    };
    $scope.write = function () {
    	$('.comment-publish').addClass('open');
    };
    $scope.cancel = function () {
    	$('.comment-publish').removeClass('open');
    };
    $scope.publish = function () {
        var comment = {
            article_id: id,
            time: Date.parse(new Date()),
            content: $scope.content,
            good: 0,
            user: user
        };
        Api.post('/api/comment', comment).then(function () {
            $scope.data.push(comment);
            $scope.content = '';
            $scope.cancel();
        });
    };
    Api.get('/api/comment/'+id).then(function (data) {
    	$scope.data = data;
    });
  }]);