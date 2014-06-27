/* global 
 drill, getPieChartData, getBarChartData, convertPieToBarData,
 getFirstProperty, objectToArray, getPathMappings,
 sliceByStringElement, groupOthers, endsWith, contains, truncNb,
 int2roundKMG, int2roundM, getPercentageHistory */

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
  it('Mash-up data into D3 bar chart ready structure', function () {
    var sampleInput = {
      '2013': {
        'aggr': 1000000,
        'program_type': 'recurrent',
        'notes': 'Important points here',
        'more': 'data as needed'
      },
      '2012': {
        'aggr': 1200000,
        'program_type': 'development',
        'notes': 'Important points here',
        'more': 'data as needed'
      },
      '2011': {
        'aggr': 1300000,
        'program_type': 'recurrent',
        'notes': 'Important points here',
        'more': 'data as needed'
      }
    };
    var expectedOutput = [
      {
        'key': 'Expenditure',
        'values': [ [ '2013' , 1000000] , 
                    [ '2012' , 1200000] , 
                    [ '2011' , 1300000] ]
      }
    ];
    expect(getBarChartData(sampleInput)).toEqual(expectedOutput);
  });
});
