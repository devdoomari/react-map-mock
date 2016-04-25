import {
  autobind,
  override,
} from 'core-decorators';

import * as _ from 'lodash';

import {
  BaseMapProvider,
  Interfaces,
} from 'react-modular-map';

import {
  loadAPI, getDaumMapAPI,
} from './api-loader';

export interface IConstructorOpts {
  APIKey: String;
}

@autobind
export default class DaumMapProvider extends BaseMapProvider {
  map: any;
  apiLoadPromise: any;
  constructor(options: IConstructorOpts) {
    super(options);
    this.apiLoadPromise = loadAPI(options.APIKey);
  }

  async initialize(domNode: HTMLElement, options) {
    // options 에서 initial position 받기.
    const mapApi = await this.apiLoadPromise;
    const center = options.center;
    const daumCenter = new mapApi.LatLng(center.lat, center.lng);
    const mapOptions = Object.assign({}, options, {
      center: daumCenter,
    });
    this.map = new mapApi.Map(domNode, mapOptions);
    this.initDefer.resolve();
  }

  setDimensions(dimension: Interfaces.IDimension) {
    this.map.relayout();
  }

  __setCenter(center: Interfaces.ILatLng) {
    const mapApi = getDaumMapAPI();
    const daumCenter = new mapApi.LatLng(center.lat, center.lng);
    this.map.setCenter(daumCenter);
  }

  __setZoom(zoomLevel: Number) {
    this.map.setLevel(zoomLevel);
  }

  __onBoundsChanged(handler): any {
    const mapApi = getDaumMapAPI();
    mapApi.event.addListener(this.map, 'bounds_changed', handler);
  }

  __onZoomLevelChanged(handler): any {
    const mapApi = getDaumMapAPI();
    mapApi.event.addListener(this.map, 'zoom_changed', handler);
  }


  __onCenterChanged(handler): any {
    const mapApi = getDaumMapAPI();
    mapApi.event.addListener(this.map, 'center_changed', handler);
  }


  getCenter(): Interfaces.ILatLng {
    const daumCenter = this.map.getCenter();
    return {
      lat: daumCenter.getLat(),
      lng: daumCenter.getLng(),
    };
  }


  getZoomLevel(): Number {
    return this.map.getLevel();
  }


  pointToLatLng(point: Interfaces.IPoint): Interfaces.ILatLng {
    const mapApi = getDaumMapAPI();
    const projection = this.map.getProjection();
    const daumPoint = new mapApi.Point(point.left, point.top);
    const daumLatLng = projection.coordsFromContainerPoint(daumPoint);
    return {
      lat: daumLatLng.getLat(),
      lng: daumLatLng.getLng(),
    };
  }


  latLngToPoint(latlng: Interfaces.ILatLng): Interfaces.IPoint {
    const mapApi = getDaumMapAPI();
    const projection = this.map.getProjection();
    const daumLatLng = new mapApi.LatLng(latlng.lat, latlng.lng);
    const daumPoint = projection.containerPointFromCoords(daumLatLng);
    return {
      left: daumPoint.x,
      top: daumPoint.y,
    };
  }
}
