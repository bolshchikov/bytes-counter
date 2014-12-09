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

});
