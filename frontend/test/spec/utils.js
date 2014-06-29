/* global 
 drill, getPieChartData, getBarChartData, convertPieToBarData,
 getFirstProperty, objectToArray, getPathMappings,
 sliceByStringElement, groupOthers, endsWith, contains,
 sampleBudget, expectedPathMappings */

'use strict';

describe('Utility: utils.objectToArray', function () {
  it('turn object into array of objects', function () {
    var sampleInput = {
      '2013': {
        'aggr': 1000000,
        'program_type': 'recurrent',
        'notes': 'Important points here',
        'more': 'data as needed'
      },
      '2012': {
        'aggr': 1000000,
        'program_type': 'development',
        'notes': 'Important points here',
        'more': 'data as needed'
      },
      '2011': {
        'aggr': 1000000,
        'program_type': 'recurrent',
        'notes': 'Important points here',
        'more': 'data as needed'
      }
    };
    var expectedOutput =  [
      {
        '2013': {
          'aggr': 1000000,
          'program_type': 'recurrent',
          'notes': 'Important points here',
          'more': 'data as needed'
        }
      },
      {
        '2012': {
          'aggr': 1000000,
          'program_type': 'development',
          'notes': 'Important points here',
          'more': 'data as needed'
        }
      },
      {
        '2011': {
          'aggr': 1000000,
          'program_type': 'recurrent',
          'notes': 'Important points here',
          'more': 'data as needed'
        }
      }
    ];
    expect(objectToArray(sampleInput)).toEqual(expectedOutput);
  });
});

describe('Utility: utils.getFirstProperty', function () {
  it('returns the first property of object as string', function () {
    var sampleInput = {'a': 1, 'b': [1,2,3], c: 4};
    var expectedOutput = 'a';
    expect(getFirstProperty(sampleInput)).toEqual(expectedOutput);
  });
});



describe('Utility: utils.getBarChartData', function () {
  var sampleInput = {
    '2013': {
      'aggr': 1000000,
      'percentage': 10,
      'program_type': 'recurrent',
      'notes': 'Important points here',
      'more': 'data as needed'
    },
    '2012': {
      'aggr': 1200000,
      'percentage': 15,
      'program_type': 'development',
      'notes': 'Important points here',
      'more': 'data as needed'
    },
    '2011': {
      'aggr': 1300000,
      'percentage': 7,
      'program_type': 'recurrent',
      'notes': 'Important points here',
      'more': 'data as needed'
    }
  };
  it('Mash-up data to D3 bar chart ready structure (Cost figure)', function () {
    var expectedOutput = [
      {
        'key': 'Expenditure',
        'values': [ [ '2013' , 1000000] , 
                    [ '2012' , 1200000] , 
                    [ '2011' , 1300000] ]
      }
    ];
    expect(getBarChartData(sampleInput, {'figure': 'aggr'})).toEqual(expectedOutput);
  });
  it('Mash-up data to D3 bar chart ready structure (% figure)', function () {
    var expectedOutput = [
      {
        'key': 'Percentage',
        'values': [ [ '2013' , 10] , 
                    [ '2012' , 15] , 
                    [ '2011' , 7] ]
      }
    ];
    expect(getBarChartData(sampleInput, {'figure': 'percentage'})).toEqual(expectedOutput);
  });
});

describe('Utility: utils.getPathMappings', function () {
  it('returns mapping of all possible paths in JSON budget', function () {
    // Sample used here are very large and included in seperate file
    // not to trench Emacs performance 
    expect(getPathMappings(sampleBudget)).toEqual(expectedPathMappings);
  });
});

describe('Utility: utils.sliceByStringElement', function () {
  it('slices array by string element instead of typical index', function () {
    var sampleArray = ['abc', 'cb', 'acb', 'yxd'];
    var expected1 = ['abc', 'cb'];
    var expected2 = ['abc', 'cb', 'acb', 'yxd'];
    var expected3 = ['abc', 'cb', 'acb'];
    var expected4 = ['cb', 'acb'];
    var expected5 = ['acb', 'yxd'];
    expect(sliceByStringElement(sampleArray,'cb','abc')).toEqual(expected1);
    expect(sliceByStringElement(sampleArray,'yxd','abc')).toEqual(expected2);
    expect(sliceByStringElement(sampleArray,'acb','abc')).toEqual(expected3);
    expect(sliceByStringElement(sampleArray,'acb','cb')).toEqual(expected4);
    expect(sliceByStringElement(sampleArray,'yxd','acb')).toEqual(expected5);
    expect(function() {
      sliceByStringElement(sampleArray,'yx1d','acb');
    } ).toThrow('Element not present in array');
  });
});

describe('Prototype: String.endsWith', function () {
  it('returns true if string ends with substring, false otherwise', function () {
    var sampleStr = 'Some string';
    var sub1 = 'ing';
    var sub2 = 'ingg';
    var sub3 = '3ing';
    expect(sampleStr.contains(sub1)).toEqual(true);
    expect(sampleStr.contains(sub2)).toEqual(false);
    expect(sampleStr.contains(sub3)).toEqual(false);
  });
});

describe('Prototype: String.contains', function () {
  it('returns true if string contains substring, false otherwise', function () {
    expect(getPathMappings(sampleBudget)).toEqual(expectedPathMappings);
  });
});
