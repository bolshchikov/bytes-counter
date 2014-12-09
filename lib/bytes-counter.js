/*
 * bytes-counter
 * https://github.com/bolshchikov/bytes-counter
 *
 * Copyright (c) 2014 Sergey N. Bolshchikov
 * Licensed under the MIT license.
 */


(function (exports) {
    'use strict';

    exports.awesome = function() {
        return 'awesome';
    };
})(typeof(module) !== undefined && module.exports !== undefined ? module.exports : (window.bytesCounter = window.bytesCounter || {}));