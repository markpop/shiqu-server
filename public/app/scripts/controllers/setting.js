'use strict';

angular.module('zhihuAngularApp')
  .controller('SettingCtrl', ['$scope', '$location', 'Tool', 'Api', function ($scope, $location, Tool, Api) {
    $scope.clear = function () {
    	Tool.alert('缓存已清除');
    };
    $scope.renew = function () {
    	Tool.alert('已是最新');
    };
  }]);
