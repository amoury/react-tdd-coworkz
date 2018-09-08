import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

import LocationMarker from "../LocationMarker";

class MegaMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {

    const { spaces } = this.props;
    
    const renderLocations = spaces.map( space => {
      const { lat, lng } = space.geometry.location;
      return <LocationMarker key={space.id} lat={lat} lng={lng} name={space.name} />;
    })

  
    return (
      <div style={{ height: "95%", width: "100%", marginTop: "20px" }}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: "AIzaSyBH8UsljlMRkbUNYkY1j4iOOem07wv9rbQ"
          }}
          center={ this.props.userLocation ? this.props.userLocation.coordinates : this.props.center}
          defaultZoom={this.props.zoom}
        >
          { renderLocations }
          {/* <LocationMarker lat={25.1555} lng={55.3235} /> */}
        </GoogleMapReact>
      </div>
    );
  }
}

export default MegaMap;
