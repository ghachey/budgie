/* global sampleBudget */

'use strict';

describe('Service: MetaFactory', function () {

  // load the controller's module
  beforeEach(module('pippDataApp.services.resources'));

  var MetaFactory,
      mockedBackend,
      wsUrl = 'http://localhost:5000';

  // Initialize the service
  beforeEach(inject(function (_MetaFactory_, $httpBackend) {
    MetaFactory = _MetaFactory_;
    mockedBackend = $httpBackend;
  }));

  // Cleanup mocked backend
  afterEach(function() {
    mockedBackend.verifyNoOutstandingExpectation();
    mockedBackend.verifyNoOutstandingRequest();
  });

  it('should have a query function', function () {
    expect(angular.isFunction(MetaFactory.get)).toBe(true);
  });

  it('should reply with Meta information about service', function () {
    var mockedMeta = {
      'meta': {
        'name': 'Pacific Institute of Public Policy Data Service', 
        'version': 0.1
      }
    };
    mockedBackend.expectGET(wsUrl).respond(mockedMeta);
    var resource = MetaFactory.query();
    mockedBackend.flush();
    expect(resource.name).toEqual(mockedMeta.meta.name);
    expect(resource.version).toEqual(mockedMeta.meta.version);
  });

});

describe('Service: BudgetFactory', function () {

  // load the controller's module
  beforeEach(module('pippDataApp.services.resources'));

  var BudgetFactory,
      mockedBackend;

  // Initialize the service
  beforeEach(inject(function (_BudgetFactory_, $httpBackend) {
    BudgetFactory = _BudgetFactory_;
    mockedBackend = $httpBackend;
  }));

  // Cleanup mocked backend
  afterEach(function() {
    mockedBackend.verifyNoOutstandingExpectation();
    mockedBackend.verifyNoOutstandingRequest();
  });

  it('should have a get function', function () {
    expect(angular.isFunction(BudgetFactory.get)).toBe(true);
  });

  it('should have a save function', function () {
    expect(angular.isFunction(BudgetFactory.save)).toBe(true);
  });

  it('should reply with a raw budget object', function () {
    // Mock budget using sampleBudget in large-data-samples.js
    mockedBackend.expectGET(wsUrl + '/budgets/vu-2014').respond(sampleBudget);
    
    var promiseResult;
    var budget = BudgetFactory
      .get('vu-2014')
      .success(function(data) {
        promiseResult = data; 
      });

    mockedBackend.flush();
    expect(promiseResult).toEqual(sampleBudget);
  });

});
