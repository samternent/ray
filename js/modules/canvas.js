;

// Canvas

(function (platform) {
    'use strict';

    var settings = {
        containerId: 'main-container',
        canvas: {
            width: 300,
            height: 500
        }
    };

    var defaultircle = {
        type: 'circle',
        color: 'red',
        x: 1,
        y: 3,
        radius: 20
    };

    function GameCanvas(options) {
        this.settings = options || settings;

        this.canvas = null;
        this.ctx = null;
        this.container = null;

        this.children = [];
        this.lookup = {};

        this._createCanvas();
        this._appendToDom();

        this.draw = new platform.draw();
        this.draw.ctx = this.ctx;
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

    GameCanvas.prototype.clear = function () {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    };

    GameCanvas.prototype.addChild = function (child) {
        var canvasObj = null;

        switch (child.type) {
        case 'circle':
            var canvasObj = Object.create(defaultircle);
            break;
        default:
            break;
        };

        Object.extend(canvasObj, child);

        this.children.lookup = {};
        for (var i = 0, len = this.children.length; i < len; i++) {
            this.children.lookup[this.children[i].id] = this.children[i];
        }

        this.children.push(canvasObj);

        return canvasObj
    };

    platform.canvas = {
        create: function (options) {
            return new GameCanvas(options);
        }
    };

})(platform);
