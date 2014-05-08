'use strict';

angular.module('zhihuAngularApp')
  .controller('IndexCtrl', ['$scope', '$location', 'Tool', 'Api', function ($scope, $location, Tool, Api) {
    $scope.$on('ngRepeatFinished', function() {
		Tool.slider();
	});
    Api.get('/api/index').then(function (data) {
    // Api.get('../scripts/data/index.json').then(function (data) {
      var len = data.length;
      $scope.data = {};
      if (len > 0) {
        if (len < 5) {
          $scope.data.sliders = data;
        } else {
          $scope.data.sliders = [
            data[0],
            data[1],
            data[2],
            data[3]
          ];
        }
      } else {
        $scope.data.sliders = [];
      }
      $scope.data.articles = data;
    });
    $scope.goArticle = function (id) {
    	$location.path('article/'+id);
    };
  }]);
