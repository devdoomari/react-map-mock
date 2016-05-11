"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_decorators_1 = require('core-decorators');
;
var MapCalculator = function () {
    function MapCalculator(args) {
        _classCallCheck(this, MapCalculator);

        this.center = args.center;
        this.unitLng = args.unitLng;
        this.unitLat = args.unitLat;
        this.width = args.width;
        this.height = args.height;
        this.minLat = args.minLat;
        this.maxLat = args.maxLat;
        this.minLng = args.minLng;
        this.maxLng = args.maxLng;
    }

    _createClass(MapCalculator, [{
        key: "latLngToXY",
        value: function latLngToXY(latlng) {
            return {
                x: Number(latlng.lng) * Number(this.unitLng),
                y: Number(latlng.lat) * Number(this.unitLat)
            };
        }
    }, {
        key: "xyToLatLng",
        value: function xyToLatLng(xy) {
            return {
                lat: Number(xy.y) / Number(this.unitLat),
                lng: Number(xy.x) / Number(this.unitLng)
            };
        }
    }, {
        key: "xyToOffsetFromMin",
        value: function xyToOffsetFromMin(xy) {
            var offsetFromMinToOrigin = {
                x: Number(this.minLng) * Number(this.unitLng),
                y: Number(this.minLat) * Number(this.unitLat)
            };
            return {
                xFromMin: Number(xy.x) - offsetFromMinToOrigin.x,
                yFromMin: Number(xy.y) - offsetFromMinToOrigin.y
            };
        }
    }, {
        key: "getViewEdgeXY",
        value: function getViewEdgeXY() {
            var originToCenterXY = this.latLngToXY(this.center);
            return {
                x: Number(originToCenterXY.x) - Number(this.width) / 2,
                y: Number(originToCenterXY.y) - Number(this.height) / 2
            };
        }
    }, {
        key: "getViewEdgeFromMin",
        value: function getViewEdgeFromMin() {
            var viewEdgeXY = this.getViewEdgeXY();
            return this.xyToOffsetFromMin(viewEdgeXY);
        }
    }, {
        key: "pointOnViewToLatLng",
        value: function pointOnViewToLatLng(point) {
            var viewEdgeXY = this.getViewEdgeXY();
            var pointXY = {
                x: Number(viewEdgeXY.x) + Number(point.left),
                y: Number(viewEdgeXY.y) + Number(point.top)
            };
            return this.xyToLatLng(pointXY);
        }
    }, {
        key: "latlngToPointOnView",
        value: function latlngToPointOnView(latlng) {
            var xy = this.latLngToXY(latlng);
            var viewEdgeXY = this.getViewEdgeXY();
            return {
                left: Number(xy.x) - Number(viewEdgeXY.x),
                top: Number(xy.y) - Number(viewEdgeXY.y)
            };
        }
    }]);

    return MapCalculator;
}();
MapCalculator = __decorate([core_decorators_1.autobind, __metadata('design:paramtypes', [Object])], MapCalculator);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MapCalculator;