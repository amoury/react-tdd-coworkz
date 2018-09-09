import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import GoogleMapReact from "google-map-react";
import LocationMarker from '../../LocationMarker';

const SingleSpaceLocation = () => {
  return (
    <Grid item md={4} sm={12}>
      <Paper style={{ minHeight: "250px", width: "100%", marginTop: "20px" }}>
        <div style={{ height: "250px", width: "100%", marginTop: "0" }}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyBH8UsljlMRkbUNYkY1j4iOOem07wv9rbQ"
            }}
            center={{ lat: 25.1555, lng: 55.3240 }}
            defaultZoom={11}
          >
            <LocationMarker name="Ansar" lat={25.1555} lng={55.3235} />
          </GoogleMapReact>
        </div>
      </Paper>
    </Grid>
  )
}

export default SingleSpaceLocation
