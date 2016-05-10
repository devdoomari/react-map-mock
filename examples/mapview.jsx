import ReactDOM from 'react-dom';
import React, {
  Component,
} from 'react';
import {
  Row, Col,
  Button,
  Input,
} from 'react-bootstrap';
import _ from 'lodash';

import {
  Map,
  Behaviors,
} from 'react-modular-map';
import {
  APIKEY,
} from './config';
import Marker from './marker';
import GeoJson from './geojson';
import {
  MockMapProvider
} from '../src/index'


class MapViewDemo extends Component {
  constructor(props) {
    super(props);
    this.mockMapProvider = new MockMapProvider();
  }
  render() {
    return (
      <div>
        <h1> Map View Test! </h1>
        <Row>
          <Col md={1} sm={1} />
          <Col md={8} sm={8} >
            <div
              style={{
                width: 600, height: 500,
                border: '5px dotted black',
              }}
            >
              <Map
                mapProvider={this.mockMapProvider}
                style={{
                  width: 600, height: 500,
                }}
                behaviors={[
                  new Behaviors.ClickToCenter(),
                  new Behaviors.DragToMoveAround(),
                  new Behaviors.ScrollToZoomIn(),
                ]}
                initialCenter={{ lat:0, lng:0 }}
              >
                <Marker
                  position={{ lat: 0, lng: 0 }}
                />
                <GeoJson
                  positions={[
                    { lat: 33.450701, lng: 126.570667 },
                    { lat: 33.4509, lng: 126.570667 },
                    { lat: 33.4509, lng: 126.5703 },
                    { lat: 33.4509, lng: 126.57 },
                    { lat: 33.450701, lng: 126.5703 },
                  ]}
                />
              </Map>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}


ReactDOM.render(
  <MapViewDemo />,
  document.getElementById('app')
);
