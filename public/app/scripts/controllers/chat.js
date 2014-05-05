'use strict';

angular.module('zhihuAngularApp')
  .controller('ChatCtrl', ['$scope', '$location', '$window', '$routeParams', 'Socket', function ($scope, $location, $window, $routeParams, Socket) {
    $scope.user = $window.user;
    $scope.back = function () {
    	$location.path('room');
    };
    $scope.data = [];
    Socket.on('message_to_client', function (data) {
    	$scope.data.push(data);
    });
    $scope.send = function () {
    	Socket.emit('message_to_server', {
    		content: $scope.content,
    		user: {
    			openid: $scope.user.openid,
    			img: $scope.user.headimgurl
    		}
    	});
        $scope.content = '';
    };
    // Api.get('scripts/data/chat.json').then(function (data) {
    // 	$scope.data = data;
    // });
  }]);