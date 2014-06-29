'use strict';

/* Filters for formatting outputs */

angular.module('pippDataApp.filters.formatters', [])

  .filter('truncNb', function() {
    return function(Nb, ind) {
      var _nb = Nb * (Math.pow(10,ind));
      _nb = Math.round(_nb);
      _nb = _nb / (Math.pow(10,ind));
      return _nb;
    };
  })

  .filter('int2roundKMG', ['$filter', function($filter) {
    return function(val) {
      var truncNb = $filter('truncNb');
      var _str = '';
      val = val.replace(/,/g,'');
      val = val.replace(/\.*/,'');

      if (val >= 1e9)        { 
        _str = truncNb((val/1e9), 2) + ' Billion';
      } else if (val >= 1e6) { 
        _str = truncNb((val/1e6), 2) + ' Million';
      } 
      else if (val >= 1e3) { 
        _str = truncNb((val/1e3), 2) + ' Thousand';
      } else { 
        _str = parseInt(val);
      }

      return _str;

    };
  }])

  .filter('int2roundM', ['$filter', function($filter) {
    return function(val) {
      var truncNb = $filter('truncNb');
      val = val.replace(/\,/g,'');
      val = val.replace(/\.0/,'');
      return truncNb((val/1e6), 2);
    };
  }]);
