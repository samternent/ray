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
    mainLoop.render = function () {
        var keysDown = Ray.Events.keysDown,
            keyChars = [];
        keysDown.forEach(function (key) {
            keyChars.push(String.fromCharCode(key));
        });

        document.body.innerHTML = keyChars;
    };

    mainLoop.startLoop();

})();
