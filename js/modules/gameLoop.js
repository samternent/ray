;

// game loop
(function () {
    'use strict';

    var settings = {};

    function GameLoop(options) {
        this.settings = options || {};

        this.loopId = null;

        this.lastTime = Ray.common.helpers.timeStamp();
        this.nowTime = null;
        this.deltaTime = null;
        this.stepTime = 1 / 60;

    };

    GameLoop.prototype._frame = function () {
        var that = this;

        this.nowTime = Ray.common.helpers.timeStamp();
        this.deltaTime = Math.min(1, (this.nowTime = this.lastTime) / 1000);

        while (this.deltaTime > this.stepTime) {
            this.deltaTime = this.deltaTime - this.stepTime;

            this._update();
        }

        this._render();

        this.lastTime = this.nowTime;
        this.loopId = window.requestAnimationFrame(function () {
            that._frame();
        });
    };


    GameLoop.prototype._update = function () { /* use this.stepTime in here */ };

    GameLoop.prototype._render = function () { /* use this.deltaTime in here */ };

    GameLoop.prototype._startLoop = function () {
        var that = this;

        this.loopId = window.requestAnimationFrame(function () {
            that._frame();
        });
    };

    GameLoop.prototype._cancelLoop = function () {
        window.cancelAnimationFrame(this.loopId);
    };

    Ray.common.gameLoop = GameLoop;

})();
