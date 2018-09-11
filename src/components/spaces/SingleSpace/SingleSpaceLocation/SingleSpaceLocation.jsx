import React from 'react';
import { Grid, Paper, Button } from '@material-ui/core';
import GoogleMapReact from "google-map-react";
import styled from 'styled-components';
import LocationMarker from '../../LocationMarker';

const ActionButtons = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
`

const styles = {
  button: {
    margin: "0 10px"
  }
}

const SingleSpaceLocation = ({ coordinates, name}) => {
  return <Grid item md={4} sm={12}>
      <Paper style={{ minHeight: "250px", width: "100%", marginTop: "20px" }}>
        <div style={{ height: "250px", width: "100%", marginTop: "0" }}>
          <GoogleMapReact bootstrapURLKeys={{ key: "AIzaSyBH8UsljlMRkbUNYkY1j4iOOem07wv9rbQ" }} center={{ lat: coordinates.lat, lng: coordinates.lng }} defaultZoom={11}>
            <LocationMarker name={name} lat={coordinates.lat} lng={coordinates.lng} />
          </GoogleMapReact>
        </div>
      </Paper>

      <ActionButtons>
        <Button color="primary" variant="contained" style={styles.button}>
          EDIT
        </Button>
        <Button color="secondary" variant="contained" style={styles.button}>
          DELETE
        </Button>
      </ActionButtons>
    </Grid>;
}

export default SingleSpaceLocation
