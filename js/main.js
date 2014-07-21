;


var resources = {
    images: [
        {
            name: 'leftArm',
            src: '../assets/img/character/leftArm.png',
            offsetX: 40,
            offsetY: -42
        },
        {
            name: 'legs',
            src: '../assets/img/character/legs.png',
            offsetX: 0,
            offsetY: 0
        },
        {
            name: 'torso',
            src: '../assets/img/character/torso.png',
            offsetX: 0,
            offsetY: -50
        },
        {
            name: 'rightArm',
            src: '../assets/img/character/rightArm.png',
            offsetX: -15,
            offsetY: -42
        },
        {
            name: 'head',
            src: '../assets/img/character/head.png',
            offsetX: -10,
            offsetY: -125
        },
        {
            name: 'hair',
            src: '../assets/img/character/hair.png',
            offsetX: -37,
            offsetY: -138
        }
    ]
};


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
    game.rayCharacter = new Ray.character();


    game.mainLoop.update = function () {
        game.canvas.clear();
    };

    game.mainLoop.render = function () {
        game.rayCharacter.draw( game.canvas.ctx );
    };

    game.mainLoop.startLoop();



    window.game = game;
})();
