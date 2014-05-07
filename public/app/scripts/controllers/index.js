'use strict';

angular.module('zhihuAngularApp')
  .controller('IndexCtrl', ['$scope', '$location', 'Tool', 'Api', function ($scope, $location, Tool, Api) {
    $scope.$on('ngRepeatFinished', function() {
		Tool.slider();
	});
    Api.get('/api/index').then(function (data) {
      $scope.data = {};
      $scope.data.articles = data;
      $scope.data.sliders = [];
    });
    $scope.goArticle = function (id) {
    	$location.path('article/'+id);
    };
  }]);
