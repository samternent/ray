;

//      TODO: write event bus

// Events

(function (platform) {
    'use strict';

    function KeyboardEvents() {
        var that = this;

        this.keysDown = [];

        window.addEventListener('keyup', function (e) {
            var key = e.keyCode ? e.keyCode : e.which,
                position = that.keysDown.indexOf(key);

            that.keysDown.splice(position, 1);
        }, false);

        window.addEventListener('keydown', function (e) {
            var key = e.keyCode ? e.keyCode : e.which;

            if (that.keysDown.indexOf(key) < 0) {
                that.keysDown.push(key);
            }
        }, false);

    }

    KeyboardEvents.prototype.isDown = function (keyCode) {
        return this.keysDown[this.keysDown.indexOf(parseInt(keyCode))];
    };

    platform.events = new KeyboardEvents();

})(platform);
