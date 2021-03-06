'use strict';

angular.module('zhihuAngularApp')
  .controller('GlobalCtrl', ['$scope', '$location', '$route', function ($scope, $location, $route) {
    $scope.night = function () {
    	var container = $('.container'),
        dn = $('.menu-dn'),
        body = $('body');
        if (container.hasClass('night')) {
            container.removeClass('night');
            body.removeClass('night');
            dn.removeClass('icon-moon2');
            dn.removeClass('icon-sun2');
            dn.addClass('icon-moon2');
        } else {
            container.addClass('night');
            body.addClass('night');
            dn.removeClass('icon-moon2');
            dn.removeClass('icon-sun2');
            dn.addClass('icon-sun2');
        }
    };
    $scope.download = function () {
    	$('.icon-download4').parent().addClass('load');
		$('.menu-circle-progress').removeClass('none');
		$('.menu-dl').addClass('none');
    };
    $scope.menuOpen = function () {
        $scope.controller = $route.current.$$route.controller;
        $('.cover').removeClass('none');
        $('.menu').addClass('open');
        $('.wrapper').addClass('open');
    };
    $scope.menuClose = function () {
        $('.menu').removeClass('open');
        $('.wrapper').removeClass('open');
		$('.cover').addClass('none');
    };
    $scope.menuHome = function (target) {
        $('.menu-item').removeClass('active');
        $(target).addClass('active');
        $scope.menuClose();
        $location.path('/');
    };
    $scope.menuSetting = function (target) {
        $('.menu-item').removeClass('active');
        $(target).addClass('active');
        $scope.menuClose();
        $location.path('setting');
    };
    $scope.menuRoom = function (target) {
        $('.menu-item').removeClass('active');
        $(target).addClass('active');
        $scope.menuClose();
        $location.path('room');
    };
    $scope.menuUser = function (target) {
        $('.menu-item').removeClass('active');
        $(target).addClass('active');
        $scope.menuClose();
        $location.path('user');
    };
    $scope.menuCollection = function (target) {
        $('.menu-item').removeClass('active');
        $(target).addClass('active');
        $scope.menuClose();
        $location.path('collection');
    };
  }]);