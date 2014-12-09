/*
 * bytes-counter
 * https://github.com/bolshchikov/bytes-counter
 *
 * Copyright (c) 2014 Sergey N. Bolshchikov
 * Licensed under the MIT license.
 */


(function (exports) {
  'use strict';

  exports.count = function(str) {
    var arg = (typeof str === 'string') ? str : JSON.stringify(str);
    return encodeURI(arg).split(/%..|./).length - 1;
  };

})(typeof(module) !== undefined && module.exports !== undefined ? module.exports : (window.bytesCounter = window.bytesCounter || {}));
