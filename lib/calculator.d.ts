import { Interfaces } from 'react-modular-map';
export interface IXY {
    x: Number;
    y: Number;
}
export interface IMinOffset {
    xFromMin: Number;
    yFromMin: Number;
}
export interface IMapCalculatorArgs {
    center: Interfaces.ILatLng;
    unitLng: Number;
    unitLat: Number;
    width: Number;
    height: Number;
    minLat: Number;
    maxLat: Number;
    minLng: Number;
    maxLng: Number;
}
export default class MapCalculator {
    center: Interfaces.ILatLng;
    unitLng: Number;
    unitLat: Number;
    width: Number;
    height: Number;
    minLat: Number;
    maxLat: Number;
    minLng: Number;
    maxLng: Number;
    constructor(args: IMapCalculatorArgs);
    latLngToXY(latlng: Interfaces.ILatLng): IXY;
    xyToLatLng(xy: IXY): {
        lat: number;
        lng: number;
    };
    xyToOffsetFromMin(xy: IXY): IMinOffset;
    getViewEdgeXY(): IXY;
    getViewEdgeFromMin(): IMinOffset;
    pointOnViewToLatLng(point: Interfaces.IPoint): Interfaces.ILatLng;
    latlngToPointOnView(latlng: Interfaces.ILatLng): Interfaces.IPoint;
}
