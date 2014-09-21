'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp').controller('EntityCtrl', function ($scope, $routeParams) {
  console.log($routeParams.entityId);
  $scope.entity = window.Entities[$routeParams.entityId];

  $scope.content = [];

  angular.forEach($scope.entity.content, function (contentIndex) {
    this.push(window.Content[contentIndex]);
  }, $scope.content);


});
