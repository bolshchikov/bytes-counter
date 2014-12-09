'use strict';

describe('bytes-counter', function () {

  var bytesCounter;

  beforeEach(function () {
    bytesCounter = require('../lib/bytes-counter.js');
  });

  it('should return the correct amount of bytes', function () {
    expect(bytesCounter.count('Hello world')).toBe(11);
    expect(bytesCounter.count('i ♥ u')).toBe(7);
  });

  it('should try to stringify the passed data', function () {
    expect(bytesCounter.count(5)).toEqual(1);
    expect(bytesCounter.count({test: 1})).toEqual(10);
  });

});
