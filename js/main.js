;

// Main logic

(function () {
    'use strict';

    var game = {};

    game.canvas = Ray.canvas.create({
        containerId: 'main-container',
        canvas: {
            width: 500,
            height: 300
        }
    });

    game.mainLoop = new Ray.loop(),
    game.preloader = new Ray.preloader( resources );


    game.mainLoop.update = function () {
        game.canvas.clear();
    };

    game.mainLoop.render = function () {

    };

    game.mainLoop.startLoop();



    window.game = game;
})();
