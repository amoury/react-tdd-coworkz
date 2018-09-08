import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import { PropTypes } from 'prop-types';

import LocationMarker from "../LocationMarker";

class MegaMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  static propTypes = {
    spaces: PropTypes.array
  }

  render() {

    const { spaces } = this.props;
    
    const renderLocations = spaces.map( space => {
      if(space.geometry) {
        const { lat, lng } = space.geometry.location;
        return <LocationMarker key={space.id} lat={lat} lng={lng} name={space.name} />;
      }
    })

  
    return (
      <div style={{ height: "100%", width: "100%", marginTop: "0"}}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: "AIzaSyBH8UsljlMRkbUNYkY1j4iOOem07wv9rbQ"
          }}
          center={ this.props.userLocation ? this.props.userLocation.coordinates : this.props.center}
          defaultZoom={this.props.zoom}
        >
          { renderLocations }
          {/* <LocationMarker name="Ansar" lat={25.1555} lng={55.3235} /> */}
        </GoogleMapReact>
      </div>
    );
  }
}

export default MegaMap;
