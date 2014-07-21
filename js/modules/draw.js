;

// draw object to canvas

(function (platform) {
    'use strict';

    var settings = {};

    function Draw(options) {
        this.ctx = null;
    }

    Draw.prototype.circle = function (ctx, circle) {
        ctx.fillStyle = circle.color;
        ctx.beginPath();
        ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fill();
    };

    Draw.prototype.elipse = function (ctx, centerX, centerY, width, height, color) {
        ctx.beginPath();
        ctx.moveTo(centerX, centerY - height / 2);
        ctx.bezierCurveTo(
            centerX + width / 2, centerY - height / 2,
            centerX + width / 2, centerY + height / 2,
            centerX, centerY + height / 2
        );
        ctx.bezierCurveTo(
            centerX - width / 2, centerY + height / 2,
            centerX - width / 2, centerY - height / 2,
            centerX, centerY - height / 2
        );

        ctx.fillStyle = color;
        ctx.fill();
        ctx.closePath();
    };

    platform.draw = new Draw();
})(platform);
