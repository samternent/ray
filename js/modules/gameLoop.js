;

// GameLoop


(function (platform) {
    'use strict';

    var settings = {};

    function GameLoop(options) {
        this.settings = options || {};

        this.loopId = null;

        this.lastTime = Ray.Common.helpers.timeStamp();
        this.nowTime = null;
        this.deltaTime = null;
        this.stepTime = 1 / 60;
    }

    GameLoop.prototype._frame = function () {
        var that = this;

        this.nowTime = Ray.Common.helpers.timeStamp();
        this.deltaTime = Math.min(1, (this.nowTime - this.lastTime));

        while (this.deltaTime > this.stepTime) {
            this.deltaTime = this.deltaTime - this.stepTime;

            this.update();
        }

        this.render();

        this.lastTime = this.nowTime;
        this.loopId = window.requestAnimationFrame(function () {
            that._frame();
        });
    };


    GameLoop.prototype.update = function () {
        /* use this.stepTime in here */
    };

    GameLoop.prototype.render = function () {
        /* use this.deltaTime in here */
    };


    GameLoop.prototype.startLoop = function () {
        var that = this;

        this.loopId = window.requestAnimationFrame(function () {
            that._frame();
        });
    };

    GameLoop.prototype.cancelLoop = function () {
        window.cancelAnimationFrame(this.loopId);
    };

    platform.gameLoop = {
        create: function (options) {
            return new GameLoop(options);
        }
    };

})(platform);
