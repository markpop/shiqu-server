'use strict';

angular.module('zhihuAngularApp')
  .controller('CollectionCtrl', ['$scope', '$location', '$window', 'Tool', 'Api', function ($scope, $location, $window, Tool, Api) {
    var user = $window.user;
    Api.get('/api/collection/'+user.openid).then(function (data) {
      $scope.data = data;
    });
    $scope.goArticle = function (id) {
    	$location.path('article/'+id);
    };
  }]);