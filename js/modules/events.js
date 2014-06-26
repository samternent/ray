;

//      TODO: write event bus

// Events

(function () {
    'use strict';

    function KeyboardEvents() {
        var that = this;

        this.keysDown = [];

        this.onkeyup = function (e) {
            var key = e.keyCode ? e.keyCode : e.which,
                position = that._keysDown.indexOf(key);

            that._keysDown.splice(position, 1);
        };

        this.onkeydown = function (e) {
            var key = e.keyCode ? e.keyCode : e.which;

            if (that.keysDown.indexOf(key) < 0) {
                that.keysDown.push(key);
            }
        };

    }

    Ray.Events = new KeyboardEvents();

})();
