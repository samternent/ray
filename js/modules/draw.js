;

// draw object to canvas

(function (platform) {
    'use strict';

    var settings = {};

    function Draw(options) {
        this.ctx = null;
    }

    Draw.prototype.circle = function (circle) {
        this.ctx.fillStyle = circle.color;
        this.ctx.beginPath();
        this.ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2, true);
        this.ctx.closePath();
        this.ctx.fill();
    };

    platform.draw = Draw;
})(platform);
