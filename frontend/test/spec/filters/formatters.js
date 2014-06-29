'use strict';

describe('Filter: truncNb formatter', function () {
  var truncNb;

  beforeEach(module('pippDataApp.filters.formatters'));

  beforeEach(inject(function ($filter) {
    truncNb = $filter('truncNb');
  }));

  it('should truncate a number to ind decimal places', function () {
    var sampleNb = 13.42468;
    var expected1 = 13.425;
    var expected2 = 13;
    var expected3 = 13.42;
    var expected4 = 13.4247;
    expect(truncNb(sampleNb,3)).toBe(expected1);
    expect(truncNb(sampleNb,0)).toBe(expected2);
    expect(truncNb(sampleNb,2)).toBe(expected3);
    expect(truncNb(sampleNb,4)).toBe(expected4);
  });
});

describe('Filter: int2roundKMG formatter', function () {
  var int2roundKMG;

  beforeEach(module('pippDataApp.filters.formatters'));

  beforeEach(inject(function ($filter) {
    int2roundKMG = $filter('int2roundKMG');
  }));

  it('should format a big number to \'$num Billion/Million/Thousand\'', function () {
    var sampleVal1 = '1154244413';
    var sampleVal2 = '4,244,413';
    var sampleVal3 = '244413';
    var expected1 = '1.15 Billion';
    var expected2 = '4.24 Million';
    var expected3 = '244.41 Thousand';
    expect(int2roundKMG(sampleVal1)).toBe(expected1);
    expect(int2roundKMG(sampleVal2)).toBe(expected2);
    expect(int2roundKMG(sampleVal3)).toBe(expected3);
  });
});

describe('Filter: int2roundM formatter', function () {
  var int2roundM;

  beforeEach(module('pippDataApp.filters.formatters'));

  beforeEach(inject(function ($filter) {
    int2roundM = $filter('int2roundM');
  }));

  it('should format numbers into x.xx Millions', function () {
    var sampleVal1 = '1,154,244';
    var sampleVal2 = '4,244,413';
    var expected1 = 1.15;
    var expected2 = 4.24;
    expect(int2roundM(sampleVal1)).toBe(expected1);
    expect(int2roundM(sampleVal2)).toBe(expected2);
  });
});
