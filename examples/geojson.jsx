import React, {
  Component,
} from 'react';
import _ from 'lodash';

export default class GeoJson extends Component {

  constructor(props) {
    super(props);
  }
  render() {
    const positionsOnScreen = _.map(this.props.positions, (position)=> {
      return this.props.latLngToPoint(position);
    });
    positionsOnScreen.push(positionsOnScreen[0]);
    const pointsStr = positionsOnScreen.map((pos)=> {
      return `${pos.left},${pos.top}`;
    }).join(' ');
    return (
      <svg width={this.props.width} height={this.props.height}>
        <polyline
          style={{
            strokeWidth: 3, stroke: 'blue',
            fill: 'none',
          }}
          points={pointsStr}
        />
      </svg>
    );
  }
}
