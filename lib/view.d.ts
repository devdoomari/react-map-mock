import * as React from 'react';
import MapController from './controller';
import { Interfaces } from 'react-modular-map';
import MapCalculator from './calculator';
export interface ISyncMapViewProps {
    controller: MapController;
    initialDimension: Interfaces.IDimension;
    center: Interfaces.ILatLng;
}
export interface ISyncMapViewState {
    center: Interfaces.ILatLng;
    zoomLevel: Number;
}
export default class View extends React.Component<any, any> {
    eventEmitter: any;
    mapCalculator: MapCalculator;
    constructor(props: any);
    componentDidMount(): void;
    componentWillUnmount(): void;
    latLngToPoint(latlng: Interfaces.ILatLng): Interfaces.IPoint;
    pointToLatLng(point: Interfaces.IPoint): Interfaces.ILatLng;
    handleSetCenter(center: Interfaces.ILatLng): void;
    handleSetDimension(dimension: Interfaces.IDimension): void;
    getZoomLevel(): Number;
    getCenter(): Interfaces.ILatLng;
    __getUnitLongToPixels(): number;
    __getUnitLatToPixels(): number;
    render(): JSX.Element;
}
