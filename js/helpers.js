;

// Helpers

(function (platform) {
    'use strict';

    var timeStamp = function () {
        return window.performance && window.performance.now ?
            window.performance.now() :
            new Date().getTime();
    };


    Object.prototype.extend = function (destination, source) {
        for (var property in source) {
            destination[ property ] = source[ property ];
        }
        return destination;
    };

    platform.common = {
        timeStamp: timeStamp
    };

})(platform);
