var resources = {
    images: [
        { name: 'hair', src: '../assets/img/character/hair.png' },
        { name: 'head', src: '../assets/img/character/head.png' },
        { name: 'torso', src: '../assets/img/character/torso.png' },
        { name: 'rightArm', src: '../assets/img/character/rightArm.png' },
        { name: 'leftArm', src: '../assets/img/character/leftArm.png' },
        { name: 'legs', src: '../assets/img/character/legs.png' }
    ]
};
;

// preloader


(function (platform) {
    'use strict';

    function Preloader ( resources ) {
        this._totalResources = resources.images.length;
        this._numResourcesLoaded = 0;

        this._images = {};

        for ( var i = 0, len = resources.images.length; i < len; i++ ) {
            this._loadImages( resources.images[i] );
        }

        platform.loadedResources.images = this._images;
    };

    Preloader.prototype._loadImages = function ( image ) {
        var that = this;

        this.images[ image.name ] = new Image();
        this.images[ image.name ].onload = function () {
            that._resourceLoaded();
        };
        this.images[ image.name ].src = image.src;
    };

    Preloader.prototype._resourceLoaded = function () {
        this._numResourcesLoaded += 1;
        this.loaded = this._numResourcesLoaded === this._totalResources;
    };


    platform.preloader = Preloader;

})(platform);
