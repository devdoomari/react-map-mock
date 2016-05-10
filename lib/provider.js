"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator.throw(value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : new P(function (resolve) {
                resolve(result.value);
            }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
var React = require('react');
var ReactDOM = require('react-dom');
var core_decorators_1 = require('core-decorators');
var view_1 = require('./view');
var react_modular_map_1 = require('react-modular-map');
var controller_1 = require('./controller');

var MockMapProvider = function (_react_modular_map_1$) {
    _inherits(MockMapProvider, _react_modular_map_1$);

    function MockMapProvider(options) {
        _classCallCheck(this, MockMapProvider);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(MockMapProvider).call(this, options));

        _this.mapController = new controller_1.default();
        return _this;
    }

    _createClass(MockMapProvider, [{
        key: "initialize",
        value: function initialize(domNode, options) {
            return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                this.domNode = domNode;
                                ReactDOM.render(React.createElement(view_1.default, { controller: this.mapController, initialDimension: options.dimension, center: options.center }), this.domNode);
                                this.initDefer.resolve();

                            case 3:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));
        }
    }, {
        key: "setDimensions",
        value: function setDimensions(dimension) {
            this.width = dimension.width;
            this.height = dimension.height;
            this.mapController.setDimensions(dimension);
        }
    }, {
        key: "__setCenter",
        value: function __setCenter(center) {
            this.mapController.setCenter(center);
        }
    }, {
        key: "__setZoom",
        value: function __setZoom(zoomLevel) {
            this.zoomLevel = zoomLevel;
            this.mapController.setZoomLevel(zoomLevel);
        }
    }, {
        key: "getCenter",
        value: function getCenter() {
            return this.mapController.getCenter();
        }
    }, {
        key: "getZoomLevel",
        value: function getZoomLevel() {
            return this.zoomLevel;
        }
    }, {
        key: "__onBoundsChanged",
        value: function __onBoundsChanged(handler) {}
    }, {
        key: "__onZoomLevelChanged",
        value: function __onZoomLevelChanged(handler) {
            this.mapController.subscribeZoomLevelChanged(handler);
        }
    }, {
        key: "__onCenterChanged",
        value: function __onCenterChanged(handler) {
            this.mapController.subscribeCenterChanged(handler);
        }
    }, {
        key: "pointToLatLng",
        value: function pointToLatLng(point) {
            return this.mapController.pointToLatLng(point);
        }
    }, {
        key: "latLngToPoint",
        value: function latLngToPoint(latlng) {
            return this.mapController.latLngToPoint(latlng);
        }
    }]);

    return MockMapProvider;
}(react_modular_map_1.BaseMapProvider);

__decorate([core_decorators_1.autobind, __metadata('design:type', Function), __metadata('design:paramtypes', [HTMLElement, Object]), __metadata('design:returntype', void 0)], MockMapProvider.prototype, "initialize", null);
__decorate([core_decorators_1.autobind, __metadata('design:type', Function), __metadata('design:paramtypes', [Object]), __metadata('design:returntype', void 0)], MockMapProvider.prototype, "setDimensions", null);
__decorate([core_decorators_1.autobind, __metadata('design:type', Function), __metadata('design:paramtypes', [Object]), __metadata('design:returntype', void 0)], MockMapProvider.prototype, "__setCenter", null);
__decorate([core_decorators_1.autobind, __metadata('design:type', Function), __metadata('design:paramtypes', [Number]), __metadata('design:returntype', void 0)], MockMapProvider.prototype, "__setZoom", null);
__decorate([core_decorators_1.autobind, __metadata('design:type', Function), __metadata('design:paramtypes', []), __metadata('design:returntype', Object)], MockMapProvider.prototype, "getCenter", null);
__decorate([core_decorators_1.autobind, __metadata('design:type', Function), __metadata('design:paramtypes', []), __metadata('design:returntype', void 0)], MockMapProvider.prototype, "getZoomLevel", null);
__decorate([core_decorators_1.autobind, __metadata('design:type', Function), __metadata('design:paramtypes', [Object]), __metadata('design:returntype', Object)], MockMapProvider.prototype, "pointToLatLng", null);
__decorate([core_decorators_1.autobind, __metadata('design:type', Function), __metadata('design:paramtypes', [Object]), __metadata('design:returntype', Object)], MockMapProvider.prototype, "latLngToPoint", null);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MockMapProvider;