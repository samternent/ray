;

(function () {
    'use strict';

    function KeyboardEvents() {
        var that = this;

        this._keysDown = [];

        window.onkeyup = function (e) {
            var key = e.keyCode ? e.keyCode : e.which,
                position = that._keysDown.indexOf(key);

            that._keysDown.splice(position, 1);
        };

        window.onkeydown = function (e) {
            var key = e.keyCode ? e.keyCode : e.which;

            if (that._keysDown.indexOf(key) < 0) {
                that._keysDown.push(key);
                that._processKeyDown();
            }
        };

    }

    KeyboardEvents.prototype._processKeyDown = function () {
        console.log(this._keysDown);
    };

    Ray.common.keyboardEvents = KeyboardEvents;

})();
