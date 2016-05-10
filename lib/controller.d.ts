import { Interfaces } from 'react-modular-map';
export default class MapController {
    eventEmitter: any;
    latLngToPoint: any;
    pointToLatLng: any;
    getCenter: any;
    constructor();
    setPointToLatLng(func: any): void;
    setLatLngToPoint(func: any): void;
    setGetCenter(func: any): void;
    subscribeCenterChanged(func: any): void;
    unsubscribeCenterChanged(func: any): void;
    subscribeZoomLevelChanged(func: any): void;
    unsubscribeZoomLevelChanged(func: any): void;
    subscribeDimensionChanged(func: any): void;
    unsubscribeDimensionChanged(func: any): void;
    setCenter(center: Interfaces.ILatLng): void;
    setZoomLevel(zoomLevel: Number): void;
    setDimensions(dimension: Interfaces.IDimension): void;
}
