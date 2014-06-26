;

// Main logic

(function () {
    'use strict';

    var
        canvas = Ray.canvas.create({
            containerId: 'main-container',
            canvas: {
                width: 500,
                height: 500
            }
        }),

        mainLoop = Ray.gameLoop.create({
            'no options': 'just yet'
        });



    mainLoop.update = function () {};
    mainLoop.render = function () {};

    mainLoop.startLoop();

})();
