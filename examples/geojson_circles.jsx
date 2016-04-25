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
    return (
      <svg width={this.props.width} height={this.props.height}>
        {positionsOnScreen.map((pos, i)=> {
          return (
            <circle cx={pos.left} cy={pos.top}
                    r={10} fill="red"
                    key={i}/>
          );
        })}
      </svg>
    );
  }
}
