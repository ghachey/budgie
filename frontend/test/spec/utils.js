/* global 
 drill, getPieChartData, getBarChartData, convertPieToBarData,
 getFirstProperty, objectToArray, getPathMappings,
 sliceByStringElement, groupOthers, endsWith, contains,
 sampleBudget, expectedPathMappings,
 drill1, drill2, drill3, drill4, drill5 */

'use strict';

// Some of the sample data is included in a seperate file
// cause it is very large and cumbersome

describe('Utility: utils.drill', function () {
  it('should return data of interest from full budget', function () {
    var path1 = 'root';
    var path2 = 'root.categories.MinistryofEducation';
    var path3 = 'root.categories.PaymentsonBehalfofGovernment.categories.CentralPayments';
    var path4 = 'root.categories.MinistryofHealth.categories.HealthServices.categories.HospitalServices.categories.Director - Curative & Hospital Services';
    var path5 = 'root.categories.MinistryofEducation.categories.SecondarySchoolsDivision';
    expect(drill(sampleBudget, path1, 2014)).toEqual(drill1);
    expect(drill(sampleBudget, path2, 2014)).toEqual(drill2);
    expect(drill(sampleBudget, path3, 2014)).toEqual(drill3);
    expect(drill(sampleBudget, path4, 2014)).toEqual(drill4);
    expect(drill(sampleBudget, path5, 2014)).toEqual(drill5);
  });
});

describe('Utility: utils.convertPieToBarData', function () {
  it('should convert data structure from pie to bar', function () {
    var pieSample = [
      {
        'key': 'Department for Education',
        'y': 1000000000
      },
      {
        'key': 'Department for Health',
        'y': 1000000000
      }
    ];
    var expectedBar = [
      {
        'key': 'Other',
        'values': [ [ 'Department for Education' , 1000000000] , 
                    [ 'Department for Health' , 1000000000] ]
      }
    ];
    expect(convertPieToBarData(pieSample)).toEqual(expectedBar);
  });
});

describe('Utility: utils.groupOthers', function () {
  it('should group a number of pie slice into others', function () {
    var pieSample =  [
      {
        'key': 'Department for Education',
        'y': 1000000001
      },
      {
        'key': 'Department for Health',
        'y': 1000000002
      },
      {
        'key': 'Department for Women',
        'y': 1000000003
      },
      {
        'key': 'Department for Men',
        'y': 1000000004
      },
      {
        'key': 'Department for Sports',
        'y': 1000000005
      },
      {
        'key': 'Department for Lazyness',
        'y': 1000000006
      }
    ];
    var grouped1 =  {
      'top': [
        {
          'key': 'Department for Education',
          'y': 1000000001
        },
        {
          'key': 'Department for Health',
          'y': 1000000002
        },
        {
          'key': 'Other',
          'y': 4000000018
        }
      ],
      'Other': [
        {
          'key': 'Other',
          'values': [
            [
              'Department for Women',
              1000000003
            ],
            [
              'Department for Men',
              1000000004
            ],
            [
              'Department for Sports',
              1000000005
            ],
            [
              'Department for Lazyness',
              1000000006
            ]
          ]
        }
      ]
    };
    var grouped2 = {
    'top': [
      {
        'key': 'Department for Education',
        'y': 1000000001
      },
      {
        'key': 'Department for Health',
        'y': 1000000002
      },
      {
        'key': 'Department for Women',
        'y': 1000000003
      },
      {
        'key': 'Other',
        'y': 3000000015
      }
    ],
      'Other': [
        {
          'key': 'Other',
          'values': [
            [
              'Department for Men',
              1000000004
            ],
            [
              'Department for Sports',
              1000000005
            ],
            [
              'Department for Lazyness',
              1000000006
            ]
          ]
        }
      ]
    };
    expect(function() {groupOthers(pieSample);}).toThrow('No cutoff provided');
    expect(groupOthers(pieSample, 2)).toEqual(grouped1);
    expect(groupOthers(pieSample, 3)).toEqual(grouped2);
  });
});

describe('Utility: utils.getPieChartData', function () {
  it('returns data ready for D3 pie charts', function () {
    var sampleData = [
      {
        'name': 'Health Services',
        'current-data': {
          'aggr': 1376328792,
          'change': 0
        },
        'level': 'Departmental Expenditure',
        'drillable': true
      },
      {
        'name': 'Executive Management and Corporate Services',
        'current-data': {
          'aggr': 219141293,
          'change': 0
        },
        'level': 'Departmental Expenditure',
        'drillable': true
      },
      {
        'name': 'Cabinet Support',
        'current-data': {
          'aggr': 46733754,
          'change': 0
        },
        'level': 'Departmental Expenditure',
        'drillable': false
      }
    ];
    var expectedPieData = [
      {
        'key': 'Health Services',
        'y': 1376328792
      },
      {
        'key': 'Executive Management and Corporate Services',
        'y': 219141293
      },
      {
        'key': 'Cabinet Support',
        'y': 46733754
      }
    ];
    expect(getPieChartData(sampleData)).toEqual(expectedPieData);
  });
});

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
    expect(sampleStr.endsWith(sub1)).toEqual(true);
    expect(sampleStr.endsWith(sub2)).toEqual(false);
    expect(sampleStr.endsWith(sub3)).toEqual(false);
  });
});

describe('Prototype: String.contains', function () {
  it('returns true if string contains substring, false otherwise', function () {
    var sampleStr = 'Some longer string';
    var sub1 = 'ing2';
    var sub2 = 'r s';
    var sub3 = 'longer';
    expect(sampleStr.contains(sub1)).toEqual(false);
    expect(sampleStr.contains(sub2)).toEqual(true);
    expect(sampleStr.contains(sub3)).toEqual(true);
  });
});
