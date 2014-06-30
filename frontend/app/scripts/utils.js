/* global _ */
/* exported drill, getPieChartData, getBarChartData, convertPieToBarData,
 getFirstProperty, objectToArray, getPathMappings,
 sliceByStringElement, groupOthers, endsWith, contains */

/**
 * @license GPLv2
 * (c) 2013-2014 Nasara Holdings.
 * License:     This file is part of Budgie.

 Budgie is free software: you can redistribute it and/or modify
 it under the terms of the GNU General Public License as published by
 the Free Software Foundation, either version 2 of the License, or
 (at your option) any later version.

 Budgie is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU General Public License for more details.

 You should have received a copy of the GNU General Public License
 along with Budgie.  If not, see <http://www.gnu.org/licenses/>.

 ***** */

'use strict';

/**
 * @description
 *
 * Simple sorting routine for categories. See example below
 * @param {Object} a Describe me
 * @param {Object} b Describe me
 */
var sortCategories = function (a, b) {
  if (parseFloat(a['current-data'].aggr) < parseFloat(b['current-data'].aggr)) {
    return 1;
  }
  if (parseFloat(a['current-data'].aggr) === parseFloat(b['current-data'].aggr)) {
    return 0;
  }
  return -1;    
};

/**
 * @description
 *
 * This drill function takes the full model and the path to the area
 * of interest in the deeply nested budget model and returns the
 * necessary data to draw the chart, summary text and previous year's
 * bar chart data along with convenient flags indicating where further
 * drilling can and cannot be done.
 *
 * For example, let's say you are within the highest level (i.e the
 * Departmental Expenditure) looking at the departments distribution
 * in the donut (i.e. Department of Health, Department of
 * Education...) and you click on Department of Health to drill down
 * further. This drill function would take the following arguments:
 * 
 * @param {Object} budget Object the full yearly budget model for a
 * given Pacific country
 * @param {String} path String representing the path to the area of
 * interest. For example, 'root.categories.depart-health'
 * @param {String} currentYear The year (e.g. 2013, 2014)
 * 
 * @return {Object} Object with budget data of interest for a specific location
 *                  in the whole budget formatted in a convenient way
 */
var drill = function (budget, path, currentYear) {

  // Work on a copy of the data to not mutate original.
  var budgetCopy = JSON.parse(JSON.stringify(budget));

  // Extract budget segment of interest in its raw form. This will
  // contain all raw data from point of interest all the way up the
  // tree.
  var budgetSegment = _.deep(budgetCopy, path);

  // Go through categories of this segment of interest, mash-up data
  // in a convenient way for use in controller: only include name,
  // current data and a boolean drillable flag.

  var rawCategories = budgetSegment.categories;
  var categories = [];

  for (var category in rawCategories) {
    // cat is a local variable to hold the newly mashed-up data
    // for a given category. It will populate the categories
    // variable above
    var cat = {}; 
    cat.name = rawCategories[category].name;
    cat.notes = rawCategories[category].notes;
    
    cat['current-data'] = rawCategories[category].data[currentYear];
    cat.level = rawCategories[category].level;
    if (_.has(rawCategories[category], 'categories')) {
      cat.drillable = true;
    } else {
      cat.drillable = false;
    }

    categories.push(cat);
  }

  categories.sort(sortCategories);

  // Replace raw categories with only the necessary information to
  // draw the view. In other words, all data further up the tree
  // that is not needed will not be included. The mashed-up
  // categories above will be set instead of the raw categories
  // (which may or may not contain an arbitrary number of data
  // further up the tree)
  return _.deep(budgetSegment, 'categories', categories);

};

/**
 * @description
 *
 * This utility function is to go from pie chart data to a simple one
 * series bar chart data. It is used mainly to display the 'others'
 * slice in a pie chart as bar chart. Refer to unit tests for
 * example usage.
 * 
 * @param {Array} arr Array of pie chart objects
 * 
 * @return {Array} barData ready for use in D3 charts.
 */
var convertPieToBarData = function(arr) {    
  var values = _.map(arr, function(item){ return [item.key, item.y]; });
  return [{'key': 'Other', 'values': values}];
};

/**
 * @description
 *
 * Small utility to group a number of categories together. It is
 * useful when a pie chart is used but has too many slices to
 * display. At the moment is takes a fixed constant number of slice
 * and groups the remaining. Eventually, if a good method is found it
 * could be implemented by passing in a function as argument. The only
 * important thing is that the input and output of this function
 * remains the same and everything else should just work.
 * Refer to unit tests for example usage.
 * 
 * @param {Array} arr array of group objects
 * @param {Number} num Number of slices
 * @return {Object} obj Object containing the top and others separately
 */
var groupOthers = function (arr, num) {

  if (num === undefined) {throw 'No cutoff provided';}

  if (arr.length <= num) {
    return arr;
  }

  var top = arr.slice(0, num);
  var others = arr.slice(num, arr.length);

  var othersAggregated = _.reduce(others, 
				  function(memory,obj) {
				    return memory + obj.y;},
				  0);

  top.push({'key': 'Other',
	    'y': othersAggregated});

  return {
    'top' : top,
    'Other' : convertPieToBarData(others)
  };

};

/**
 * @description
 *
 * This utility function is used mash-up data from model into D3 pie
 * chart ready data. Refer to unit tests for sample usage
 * 
 * @param {Array} categories Array of categories (any level)
 * 
 * @return {Array} pieData Array ready for use in D3 pie charts.
 */
var getPieChartData = function(categories) {
  
  var pieData = [];

  // Just using 'aggr' for now...
  for(var i=0; i<categories.length; i++) {
    var aggr = categories[i]['current-data'].aggr;
    if (aggr) { // Only push data if there is some
      pieData.push(
	{
	  key: categories[i].name, 
	  y: parseFloat(aggr) 
	}
      );
    }
  }
  
  return groupOthers(pieData,16); // will only group if needed
  
};

/**
 * @description
 *
 * Small utility to return an object turned into an array of
 * objects. This is only a convenience function to produce bar charts
 * data. Refer to test/specs/utils.js for example usage.
 * 
 * @param {Object} obj Object to iterate
 * @return {Array} objAsArray an array of objects
 */
var objectToArray = function (obj) {
  var objAsArray = [];
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      var newObj = {};
      newObj[prop] = obj[prop];
      objAsArray.push(newObj);
    }
  }
  return objAsArray;
};

/**
 * @description
 *
 * Small utility to return the first property name for an object
 * 
 * @param {Object} obj Object to iterate
 * @return {String} prop String property name
 */
var getFirstProperty = function (obj) {
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      return prop;
    }
  }
  return null;
};

/**
 * @description
 *
 * This utility function is used to mash-up data from model into D3
 * bar chart ready data. At the moment is only prepares bar chart data
 * using the aggregate costs but this can later be refined to do what we
 * want. Refer to test/specs/utils.js for usage example.
 * 
 * @param {Array} data Array containing the last three years worth of
 * data for a given Department, Program, Sub-program...
 * 
 * @return {Array} barData ready for use in D3 charts (i.e. NVD3).
 */
var getBarChartData = function(data, options) {

  var figures = {
    'percentage': 'Percentage',
    'aggr': 'Expenditure'
  };

  // First turn the object into array so it can easily be reduced to
  // a form convenient for D3 charts.
  var dataAsArray = objectToArray(data);

  var barValues = [];
  var barData = [
    {
      'key': figures[options.figure],
      'values': barValues
    }
  ];

  /**
   * Reduce function that consolidates new bar chart data from the next 
   * object (i.e. next year)
   * 
   * Eventually will have to check for the existance of cost figures 
   * before trying to get values and pushing them to the set.
   */
  var reduceFunction = function(memory, object) {
    var prop = getFirstProperty(object); // the year
    var cost = parseInt(object[prop][options.figure]); 
    
    barValues = memory[0].values.push([prop, cost]);
    
    return 	barData;
  };

  // Not the most purest use of reduce with some imperative stuff
  // mixed in, but working for now
  return _.reduce(dataAsArray, reduceFunction, barData);

};

/**
 * @description
 *
 * Utility to return a convenient mapping of all possible paths in a JSON budget.
 * Example usage in test/specs/utils.js
 * 
 * @param {Object} budget Object the full yearly budget model for a
 * given Pacific country
 * @return {Object} paths Object of all possible path mapping
 * (e.g. {'Department of Health': 'root.depart-health',
 *        'Program of Public Health': 'root.depart-health.prg-pub-hea'})
 */
var getPathMappings = function (budget) {
  var mapping = {};

  function process(obj, mapping, current){
    var ikey, value;
    for(var key in obj){
      if(obj.hasOwnProperty(key)){
	value = obj[key];
	ikey = current ? current + '.' + key : key;
	if(typeof value === 'object'){
          process(value, mapping, ikey); // recurse deeper
	} else {
	  // All paths in the tree are processed, the ones
	  // ending with .names are the paths of interest
	  if (ikey.endsWith('.name')) {
	    mapping[value] = ikey.replace('.name','');
	  }
	}
      }
    }
    return mapping;
  }    

  process(budget, mapping, '');

  return mapping;

};

/**
 * @description
 *
 * Small utility to slice an array of string based on string elements
 * instead of indices.
 * 
 * @param {Array} arr Array to slice
 * @param {String} start String to start slice
 * @param {String} end String to end slice
 * @return {Array} arr Array sliced
 */
var sliceByStringElement = function (arr, end, start) {

  start = start === undefined ? arr[0] : start;
  var newArr = [];

  if (!_.contains(arr, start) || !_.contains(arr, end)) {
    throw 'Element not present in array';
  }

  for(var i=0; i<arr.length; i++) {
    if (arr[i] === start) {
      for (var j=i; j<arr.length; j++) {
	if (arr[j] === end) {
	  newArr.push(arr[j]);
	  break;
	}
	newArr.push(arr[j]);
      }
    }
  }

  return newArr;

};

// Normally shouldn't modify base objects I don't own. But fuck it,
// whoever works on this code base will have to pay attention so I can
// get my convenient and clear methods :)
// Besides, those are part of the proposal for ECMAScript 6 anyway.

/**
 * Modify the prototype to add builtin endsWith method
 */
String.prototype.endsWith = function (s) {
  return this.length >= s.length && this.substr(this.length - s.length) === s;
};

/**
 * Modify the prototype to add builtin contains method
 */
String.prototype.contains = function(s) {
  return this.indexOf(s) !== -1;
};
