;

// Canvas

(function () {
    'use strict';

    var settings = {
        containerId: 'main-container',
        canvas: {
            width: 300,
            height: 500
        }
    };

    function GameCanvas(options) {
        this.settings = options || settings;

        this.canvas = null;
        this.ctx = null;
        this.container = null;

        this._createCanvas();
        this._appendToDom()
    };

    GameCanvas.prototype._createCanvas = function () {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');

        this.canvas.width = this.settings.canvas.width;
        this.canvas.height = this.settings.canvas.height;
    };

    GameCanvas.prototype._appendToDom = function () {
        this.container = document.getElementById(this.settings.containerId);
        this.container.appendChild(this.canvas);

    };

    platform.canvas = {
        create: function (options) {
            return new GameCanvas(options);
        }

    };

})(platform);
