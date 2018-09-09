import React from 'react';
import { Chip, Avatar } from "@material-ui/core";
import { CheckCircle } from "@material-ui/icons";

import { header2 } from '../../../../variables';

const styles = {
  section: {
    marginTop: "50px",
    border: "1px solid lightgrey",
    borderRadius: "10px",
    padding: "10px 20px"
  },
  chip: {
    margin: "5px"
  }
}

const SingleSpaceAmenties = () => {
  return <section style={styles.section}>
      <h2 style={header2}>Amenities</h2>
      <hr />

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <Chip style={ styles.chip } color="primary" avatar={<Avatar><CheckCircle /></Avatar>} variant="outlined" label="High Speed Wifi"/>
        <Chip style={ styles.chip } color="primary" avatar={<Avatar><CheckCircle /></Avatar>} variant="outlined" label="High Speed Wifi"/>
        <Chip style={ styles.chip } color="primary" avatar={<Avatar><CheckCircle /></Avatar>} variant="outlined" label="High Speed Wifi"/>
        <Chip style={ styles.chip } color="primary" avatar={<Avatar><CheckCircle /></Avatar>} variant="outlined" label="High Speed Wifi"/>
        <Chip style={ styles.chip } color="primary" avatar={<Avatar><CheckCircle /></Avatar>} variant="outlined" label="High Speed Wifi"/>
        
      </div>
    </section>;
}

export default SingleSpaceAmenties
