'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp').controller('MainCtrl', function ($scope, $sce) {
  $scope.content = window.Content;
  $scope.trustUrl = function (url) {
    return $sce.trustAsResourceUrl(url);
  };

});
