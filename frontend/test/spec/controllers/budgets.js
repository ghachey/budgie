'use strict';

describe('Controller: BudgetCtrl', function () {

  // load the controller's module
  beforeEach(module('pippDataApp.controllers.budgets'));

  var BudgetCtrl,
      $scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    $scope = $rootScope.$new();
    BudgetCtrl = $controller('BudgetCtrl', {
      $scope: $scope
    });
  }));

  it('should initialize controller BudgetCtrl', function(){
    expect(BudgetCtrl).toBeDefined();
  });

  // Unsure yet
  // it('should have countryName undefined', function(){
  //   expect($scope.countryName).toBeUndefined();
  // });

  // it('should have currentYear undefined', function(){
  //   expect($scope.currentYear).toBeUndefined();
  // });

  // it('should initialized a currentDocument', function(){
  //   expect($scope.currentDocument).toBeDefined();
  // });

  it('should initialized a budgetCurrency to an empty string', function(){
    expect($scope.budgetCurrency).toBe('');
  });

  it('should initialized a currencyMultiplier to 1', function(){
    expect($scope.currencyMultiplier).toBe(1);
  });

  it('should inititialize an empty list of breadcrumbs', function(){
    expect($scope.breadcrumbs.length).toBe(0);
  });

  it('should initialized showOthers to false', function(){
    expect($scope.showOthers).toBe(false);
  });


  // Still to unit test: $scope.pieChartData, $scope.othersBarChartData,
  // $scope.stackedBarChartData, $scope.showPercentage
  // $scope.percentageHistory (needs mock data that support it),
  // $scope.historyLabel

  // Unit test scope functions

  // it('should format tooltip content', function(){
  //   expect($scope.tooltipContent()).toBe(false);
  // });

  var samplePieData = [
    { key: "One", y: 5 },
    { key: "Two", y: 2 },
    { key: "Three", y: 9 },
  ];
  
  

  it('should return x from pie data', function(){
    expect(function() {$scope.xFunction(samplePieData[0]);}).toBe('One');
    expect(function() {$scope.xFunction(samplePieData[1]);}).toBe('Two');
  });

  it('should return y from pie data', function(){
    expect(function() {$scope.yFunction(samplePieData[0]);}).toBe(5);
    expect(function() {$scope.yFunction(samplePieData[1]);}).toBe(2);
  });

});
