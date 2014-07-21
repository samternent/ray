;

// game entity

(function (platform) {
    'use strict';

    function Entity () {

    }

    Entity.prototype.draw = function () {};

    platform.entity = Entity;

})(platform);


;

// character


(function (platform) {
    'use strict';

    function Character () {
        this.prototype = new platform.entity();
        this.prototype.constructor = platform.entity;

        this.positionX = 100;
        this.positionY = 200;

        this._images = platform.loadedResources.images; //change structure of images
    }

    Character.prototype.draw = function ( ctx ) {
        var that = this;

        for ( var image in this._images ) {
            if (this._images[ image ] instanceof Image) {
                ctx.drawImage(
                    this._images[ image ],
                    this.positionX + this._images[ image ].offsetX,
                    this.positionY + this._images[ image ].offsetY
                );
            }
        }

        platform.draw.elipse( ctx, that.positionX + 47, that.positionY - 68, 8, 14, 'black' );      // left eye
        platform.draw.elipse( ctx, that.positionX + 58, that.positionY - 68, 8, 14, 'black' );      // right eye

        platform.draw.elipse( ctx, that.positionX + 40, that.positionY + 29, 160, 6, '#3d3d3d' );   // shadow
    };

    platform.character = Character;

})(platform);
