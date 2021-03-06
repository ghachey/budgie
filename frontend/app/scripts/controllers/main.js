'use strict';

/* Main controllers */

angular.module('pippDataApp.controllers.main', [])

  .controller('MainCtrl', ['$scope', '$location', function ($scope, $location) {

    // Only here for the dummy test, once testing get started
    // refactor this
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    console.log($location.path());
  }])    

  .controller('TestCtrl', ['$scope', '$location', 'MetaFactory', function ($scope, $location, MetaFactory) {

    $scope.info = MetaFactory.query();
    console.log($scope.info);
    console.log($location.path());

  }]);
