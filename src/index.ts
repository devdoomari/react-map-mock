import {
  autobind,
  override,
} from 'core-decorators';

import {
  BaseMapProvider,
  Interfaces,
} from 'react-modular-map';

import {
  loadAPI, getDaumMapApi,
} from './api-loader';

export interface IConstructorOpts {
  APIKey: String;
}

export class DaumMapProvider extends BaseMapProvider {
  map: any;
  constructor(options: IConstructorArgs) {
    super(options);
    this.apiLoadPromise = loadAPI(options.APIKey);
  }
  @override
  @autobind
  async initialize(domNode: HTMLElement, options) {
    // options 에서 initial position 받기.
    const mapApi = await this.apiLoadPromise;
    const center = options.center;
    const daumCenter = new mapApi.LatLng(center.lat, center.lng);
    const mapOptions = {
      ...options,
      center: daumCepter,
    };
    this.map = new mapApi.Map(domNode, mapOptions);
  }
  @override
  @autobind
  setDimensions(dimension: Interfaces.IDimension) {
    this.map.relayout();
  }
  @override
  @autobind
  __setCenter(center: Interfaces.ILatLng) {
    const daumCenter = new mapApi.LatLng(center.lat, center.lng);
    this.map.setCenter(daumCenter);
  }
  @override
  @autobind
  __setZoom(zoomLevel: Number) {

  }

  @override
  @autobind
  onBoundsChanged(handler): any {
  }

  @override
  @autobind
  onZoomChanged(handler): any {

  }

  @override
  @autobind
  onCenterChanged(handler): any {

  }

  @override
  @autobind
  getCenter(): Interfaces.ILatLng {

  }

  @override
  @autobind
  getZoomLevel(): Number {

  }

  @override
  @autobind
  pointToLatLng(point: Interfaces.IPoint): Interfaces.ILatLng {

  }

  @override
  @autobind
  latLngToPoint(latlng: Interfaces.ILatLng): Interfaces.IPoint {

  }
  setCenter(center: Interfaces.ILatLng): Promise<void>;
  setZoom(zoomLevel: Number): Promise<void>;
}
