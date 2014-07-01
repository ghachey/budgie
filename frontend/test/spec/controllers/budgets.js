'use strict';

// Due to the nature of the controllers in budgets.js it is much harder
// to write test. I have spend about 2 days trying various approaches with which
// I could never get most important tests to pass, only to revert back  
// to some primitive tests but at least they pass.

// Much work needs to be done here to properly test our business logic.
// Refactoring the controllers would go a long way in making the tests
// easier to write. Most of the code could be better organised and pushed
// as services.

describe('Controller: BudgetCtrl', function () {

  // load the controller's module
  beforeEach(module('pippDataApp.controllers.budgets'));

  var BudgetCtrl,
      $scope;

  // TODO - Need to properly mock the service to isolate controller
  // from real backend calls

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

  it('should have countryName undefined', function(){
    expect($scope.countryName).toBeUndefined();
  });

  it('should have currentYear undefined', function(){
    expect($scope.currentYear).toBeUndefined();
  });

  it('should initialized a currentDocument', function(){
    expect($scope.currentDocument).toBeDefined();
  });

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

  // TODO - Test business logic interaction as small units
  // using re-inialized small sample data sets.

});
