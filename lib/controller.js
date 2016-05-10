"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var eventemitter2_1 = require('eventemitter2');
var CENTER_CHANGED = 'CENTER_CHANGED';
var ZOOMLEVEL_CHANGED = 'ZOOMLEVEL_CHANGED';
var DIMENSION_CHANGED = 'DIMENSION_CHANGED';

var MapController = function () {
    function MapController() {
        _classCallCheck(this, MapController);

        this.eventEmitter = new eventemitter2_1.EventEmitter2();
    }

    _createClass(MapController, [{
        key: 'setPointToLatLng',
        value: function setPointToLatLng(func) {
            this.pointToLatLng = func;
        }
    }, {
        key: 'setLatLngToPoint',
        value: function setLatLngToPoint(func) {
            this.latLngToPoint = func;
        }
    }, {
        key: 'setGetCenter',
        value: function setGetCenter(func) {
            this.getCenter = func;
        }
    }, {
        key: 'subscribeCenterChanged',
        value: function subscribeCenterChanged(func) {
            this.eventEmitter.on(CENTER_CHANGED, func);
        }
    }, {
        key: 'unsubscribeCenterChanged',
        value: function unsubscribeCenterChanged(func) {
            this.eventEmitter.off(CENTER_CHANGED, func);
        }
    }, {
        key: 'subscribeZoomLevelChanged',
        value: function subscribeZoomLevelChanged(func) {
            this.eventEmitter.on(ZOOMLEVEL_CHANGED, func);
        }
    }, {
        key: 'unsubscribeZoomLevelChanged',
        value: function unsubscribeZoomLevelChanged(func) {
            this.eventEmitter.off(ZOOMLEVEL_CHANGED, func);
        }
    }, {
        key: 'subscribeDimensionChanged',
        value: function subscribeDimensionChanged(func) {
            this.eventEmitter.on(DIMENSION_CHANGED, func);
        }
    }, {
        key: 'unsubscribeDimensionChanged',
        value: function unsubscribeDimensionChanged(func) {
            this.eventEmitter.off(DIMENSION_CHANGED, func);
        }
    }, {
        key: 'setCenter',
        value: function setCenter(center) {
            this.eventEmitter.emit(CENTER_CHANGED, center);
        }
    }, {
        key: 'setZoomLevel',
        value: function setZoomLevel(zoomLevel) {
            this.eventEmitter.emit(ZOOMLEVEL_CHANGED, zoomLevel);
        }
    }, {
        key: 'setDimensions',
        value: function setDimensions(dimension) {
            this.eventEmitter.emit(DIMENSION_CHANGED, dimension);
        }
    }]);

    return MapController;
}();

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MapController;