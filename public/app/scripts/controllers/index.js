'use strict';

angular.module('zhihuAngularApp')
  .controller('IndexCtrl', ['$scope', '$location', 'Tool', 'Api', 'geolocation', function ($scope, $location, Tool, Api, geolocation) {
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
    geolocation.getLocation().then(function(data){
      console.log(data.coords.latitude+'/'+data.coords.longitude);
      Api.get('/api/weather/'+data.coords.latitude+'/'+data.coords.longitude).then(function (weather) {
        $scope.weather = weather;
        console.log(weather);
      });
    });
    $scope.goArticle = function (id) {
    	$location.path('article/'+id);
    };
  }]);
