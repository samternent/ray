;

//      TODO: write event bus

// Events

(function () {
    'use strict';

    function KeyboardEvents() {
        var that = this;

        this.keysDown = [];

        window.onkeyup = function (e) {
            var key = e.keyCode ? e.keyCode : e.which,
                position = that.keysDown.indexOf(key);

            that.keysDown.splice(position, 1);
        };

        window.onkeydown = function (e) {
            var key = e.keyCode ? e.keyCode : e.which;

            if (that.keysDown.indexOf(key) < 0) {
                that.keysDown.push(key);
            }
        };

    }

    Ray.Events = new KeyboardEvents();

})();
