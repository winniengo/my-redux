import React from 'react';
import ReactDOM from 'react-dom';

import MarkerManager from '../../util/marker_manager';

class BenchMap extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const mapDOMNode = this.refs.map; // find map on the DOM

    const mapOptions = { // set map to show SF
      center: {
        lat: 37.7758,
        lng: -122.435
      },
      zoom: 13
    };

    // wrap the mapDOMNode in a Google Map
    this.map = new google.maps.Map(mapDOMNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers(this.props.benches);
    this._registerListeners();
  }

  componentWillReceiveProps(nextProps) {
    this.MarkerManager.updateMarkers(nextProps.benches);
  }

  _registerListeners() {
    console.log(this.props.updateBounds);
    google.maps.event.addListener(this.map, 'idle', () => { // idle event listener
      const { north, south, east, west } = this.map.getBounds().toJSON();
      const bounds = {
        northEast: {
          lat: north,
          lng: east
        },
        southWest: {
          lat: south,
          lng: west
        }
      };

      this.props.updateBounds(bounds);
    });

    google.maps.event.addListener(this.map, 'click', e => { // click event listener
      console.log(e.latLng);
    })

  }

  render () {
    return (
      <div id='bench-map' ref='map'>
      </div>
    )
  }
};

export default BenchMap;
