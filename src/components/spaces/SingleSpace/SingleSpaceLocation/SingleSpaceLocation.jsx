import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import GoogleMapReact from "google-map-react";
import LocationMarker from '../../LocationMarker';

const SingleSpaceLocation = ({ coordinates, name}) => {
  return (
    <Grid item md={4} sm={12}>
      <Paper style={{ minHeight: "250px", width: "100%", marginTop: "20px" }}>
        <div style={{ height: "250px", width: "100%", marginTop: "0" }}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyBH8UsljlMRkbUNYkY1j4iOOem07wv9rbQ"
            }}
            center={{ lat: coordinates.lat, lng: coordinates.lng }}
            defaultZoom={11}
          >
            <LocationMarker name={name} lat={coordinates.lat} lng={coordinates.lng} />
          </GoogleMapReact>
        </div>
      </Paper>
    </Grid>
  )
}

export default SingleSpaceLocation
