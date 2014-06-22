;

// some helpers
(function () {
    'use strict';

    var timeStamp = function () {
        return window.performance && window.performance.now ?
            window.performance.now() :
            new Date().getTime();
    };

    Ray.common.helpers = {
        timeStamp: timeStamp
    };

})();
