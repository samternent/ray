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

        this._images[ image.name ] = new Image();
        this._images[ image.name ].onload = function () {
            that._resourceLoaded();
        };
        this._images[ image.name ].src = image.src;
        this._images[ image.name ].offsetX = image.offsetX;
        this._images[ image.name ].offsetY = image.offsetY;
    };

    Preloader.prototype._resourceLoaded = function () {
        this._numResourcesLoaded += 1;
        this.loaded = this._numResourcesLoaded === this._totalResources;
    };


    platform.preloader = Preloader;

})(platform);
