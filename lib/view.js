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
var React = require('react');
var _ = require('lodash');
var core_decorators_1 = require('core-decorators');
var react_modular_map_1 = require('react-modular-map');
var calculator_1 = require('./calculator');

var View = function (_React$Component) {
    _inherits(View, _React$Component);

    function View(props) {
        _classCallCheck(this, View);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(View).call(this, props));

        _this.props.controller.setPointToLatLng(_this.pointToLatLng);
        _this.props.controller.setLatLngToPoint(_this.latLngToPoint);
        _this.props.controller.setGetCenter(_this.getCenter);
        _this.state = {
            center: _this.props.center,
            minLat: -10,
            maxLat: 10,
            minLng: -10,
            maxLng: 10,
            width: _this.props.initialDimension.width,
            height: _this.props.initialDimension.height,
            zoomLevel: 1
        };
        var unitLat = _this.__getUnitLatToPixels();
        var unitLng = _this.__getUnitLongToPixels();
        var mapCalculatorArgs = Object.assign({}, _this.state, {
            unitLat: unitLat, unitLng: unitLng
        });
        _this.mapCalculator = new calculator_1.default(mapCalculatorArgs);
        return _this;
    }

    _createClass(View, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            this.props.controller.subscribeCenterChanged(this.handleSetCenter);
            this.props.controller.subscribeDimensionChanged(this.handleSetDimension);
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            this.props.controller.unsubscribeCenterChanged(this.handleSetCenter);
        }
    }, {
        key: "latLngToPoint",
        value: function latLngToPoint(latlng) {
            var pointOnView = this.mapCalculator.latlngToPointOnView(latlng);
            return {
                left: pointOnView.left, top: pointOnView.top
            };
        }
    }, {
        key: "pointToLatLng",
        value: function pointToLatLng(point) {
            var latlng = this.mapCalculator.pointOnViewToLatLng(point);
            return latlng;
        }
    }, {
        key: "handleSetCenter",
        value: function handleSetCenter(center) {
            this.setState({ center: center });
        }
    }, {
        key: "handleSetDimension",
        value: function handleSetDimension(dimension) {
            this.setState({
                width: dimension.width,
                height: dimension.height
            });
        }
    }, {
        key: "getZoomLevel",
        value: function getZoomLevel() {
            return this.state.zoomLevel;
        }
    }, {
        key: "getCenter",
        value: function getCenter() {
            return this.state.center;
        }
    }, {
        key: "__getUnitLongToPixels",
        value: function __getUnitLongToPixels() {
            return 100 / this.state.zoomLevel;
        }
    }, {
        key: "__getUnitLatToPixels",
        value: function __getUnitLatToPixels() {
            return 50 / this.state.zoomLevel;
        }
    }, {
        key: "render",
        value: function render() {
            var unitLat = this.__getUnitLatToPixels();
            var unitLng = this.__getUnitLongToPixels();
            var args = Object.assign({}, this.state, {
                unitLat: unitLat, unitLng: unitLng
            });
            this.mapCalculator = new calculator_1.default(args);
            var xRange = _.range(this.state.minLng, this.state.maxLng);
            var yRange = _.range(this.state.minLat, this.state.maxLat);
            var viewEdgeFromMin = this.mapCalculator.getViewEdgeFromMin();
            var left = -viewEdgeFromMin.xFromMin;
            var top = -viewEdgeFromMin.yFromMin;
            var gridTable = React.createElement("div", null, _.map(yRange, function (y) {
                return React.createElement("div", { key: y }, _.map(xRange, function (x) {
                    return React.createElement("div", { key: x + ":" + y, style: {
                            width: unitLng,
                            height: unitLat,
                            float: 'left',
                            border: '2px solid black',
                            textAlign: 'center',
                            verticalAlign: 'middle'
                        } }, React.createElement("span", null, " ", "(" + x + ":" + y + ")", " "));
                }));
            }));
            return React.createElement("div", { style: { width: this.state.width,
                    height: this.state.height,
                    overflow: 'hidden',
                    position: 'relative'
                } }, React.createElement("div", { style: {
                    position: 'absolute',
                    top: top,
                    left: left,
                    width: (this.state.maxLng - this.state.minLng) * unitLng * 2,
                    height: (this.state.maxLat - this.state.minLat) * unitLat * 2
                } }, gridTable));
        }
    }]);

    return View;
}(React.Component);

__decorate([core_decorators_1.autobind, __metadata('design:type', Function), __metadata('design:paramtypes', [Object]), __metadata('design:returntype', Object)], View.prototype, "latLngToPoint", null);
__decorate([core_decorators_1.autobind, __metadata('design:type', Function), __metadata('design:paramtypes', [Object]), __metadata('design:returntype', Object)], View.prototype, "pointToLatLng", null);
__decorate([core_decorators_1.autobind, __metadata('design:type', Function), __metadata('design:paramtypes', [Object]), __metadata('design:returntype', void 0)], View.prototype, "handleSetCenter", null);
__decorate([core_decorators_1.autobind, __metadata('design:type', Function), __metadata('design:paramtypes', [Object]), __metadata('design:returntype', void 0)], View.prototype, "handleSetDimension", null);
__decorate([core_decorators_1.autobind, __metadata('design:type', Function), __metadata('design:paramtypes', []), __metadata('design:returntype', Number)], View.prototype, "getZoomLevel", null);
__decorate([core_decorators_1.autobind, __metadata('design:type', Function), __metadata('design:paramtypes', []), __metadata('design:returntype', Object)], View.prototype, "getCenter", null);
__decorate([core_decorators_1.autobind, __metadata('design:type', Function), __metadata('design:paramtypes', []), __metadata('design:returntype', void 0)], View.prototype, "__getUnitLongToPixels", null);
__decorate([core_decorators_1.autobind, __metadata('design:type', Function), __metadata('design:paramtypes', []), __metadata('design:returntype', void 0)], View.prototype, "__getUnitLatToPixels", null);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = View;