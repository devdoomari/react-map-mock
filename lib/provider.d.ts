import { BaseMapProvider, Interfaces } from 'react-modular-map';
import MapController from './controller';
export default class MockMapProvider extends BaseMapProvider {
    height: Number;
    width: Number;
    center: Interfaces.ILatLng;
    zoomLevel: Number;
    domNode: HTMLElement;
    mapController: MapController;
    constructor(options: any);
    initialize(domNode: HTMLElement, options: any): Promise<void>;
    setDimensions(dimension: Interfaces.IDimension): void;
    __setCenter(center: Interfaces.ILatLng): void;
    __setZoom(zoomLevel: Number): void;
    getCenter(): Interfaces.ILatLng;
    getZoomLevel(): Number;
    __onBoundsChanged(handler: Interfaces.IBoundsChangedHandler): void;
    __onZoomLevelChanged(handler: Interfaces.IZoomLevelChangedHandler): void;
    __onCenterChanged(handler: Interfaces.ICenterChangedHandler): void;
    pointToLatLng(point: Interfaces.IPoint): Interfaces.ILatLng;
    latLngToPoint(latlng: Interfaces.ILatLng): Interfaces.IPoint;
}
