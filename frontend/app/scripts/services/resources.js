'use strict';

/* HTTP resource services */

// TODO: Set web services URL based on production or devel flag
// set by Grunt deploy or grunt serve
var wsUrl = 'http://localhost:5000'; // for dev, don't commit
//var wsUrl = 'http://freswota:5000';
//var wsUrl = 'http://economics.pacificpolicy.org';

angular.module('pippDataApp.services.resources', [])

  .factory('MetaFactory', ['$resource', function ($resource) {
    return $resource(wsUrl, {}, {
      query: { method: 'GET',
               transformResponse: function (data) {
		 return angular.fromJson(data).meta;
               },
               isArray: false }
    });
  }])

  .factory('BudgetFactory', ['$http', function ($http) {
    var budgetUrl = wsUrl + '/budgets';
    return {
      get: function(budgetId) {
	return $http.get(budgetUrl + '/' + budgetId);
      },
      save: function(budget, budgetId) { // Not used yet
	var url = budgetUrl + '/' + budgetId;
	return $http.put(url, budget);
      }
    };
  }]);
