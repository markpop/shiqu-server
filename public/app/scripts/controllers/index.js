'use strict';

angular.module('zhihuAngularApp')
  .controller('IndexCtrl', ['$scope', '$location', 'Tool', 'Api', function ($scope, $location, Tool, Api) {
    $scope.$on('ngRepeatFinished', function() {
		Tool.slider();
	});
    Api.get('/api/index').then(function (data) {
      var len = data.length;
      if (len > 0) {
        data.sliders = data;
      } else {
        data.sliders = [];
      }
    	$scope.data = data;
    });
    $scope.goArticle = function (id) {
    	$location.path('article/'+id);
    };
  }]);
