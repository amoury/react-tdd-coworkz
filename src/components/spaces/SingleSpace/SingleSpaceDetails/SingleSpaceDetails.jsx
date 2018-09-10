import React from "react";
import { Grid } from "@material-ui/core";
import { LocationOn, Smartphone, Link } from "@material-ui/icons";
import styled from "styled-components";


import { montserrat, merri } from "../../../../variables";
import SingleSpaceOverview from "./SingleSpaceOverview";
import SingleSpaceAmenties from "./SingleSpaceAmenties";

const Header1 = styled.h1`
  font-family: ${montserrat};
  font-weight: 500;
`;

const LocationText = styled.p`
  font-family: ${merri};
  font-size: 0.8em;
`;

const styles = {
  locationIcon: {
    paddingRight: "10px",
    fontSize: "1.2em"
  }
};



const SingleSpaceDetails = ({space}) => {
  return (
    <Grid item md={8} sm={12}>
      <Grid container>
        <Grid item md={2} sm={false} />
        <Grid item md={10} sm={12}>
          <Header1>{ space && space.name ? space.name : null }</Header1>
          <LocationText>
            <LocationOn style={styles.locationIcon} />
            { space && space.location ? space.location.address : null }
          </LocationText>

          { space && space.contactInfo ?
            <LocationText>
              <Smartphone style={styles.locationIcon} />
              { space.contactInfo.contactNumber }
            </LocationText> :
            null
          }
          

          { space && space.contactInfo ? 
            <LocationText>
              <Link style={styles.locationIcon} />
              { space.contactInfo.siteLink }
            </LocationText> :
            null
          }

          <hr />

          <SingleSpaceOverview overview={space.description} />
          <SingleSpaceAmenties amenities={space.amenities} />
        </Grid>
      </Grid>

      <Grid container />
    </Grid>
  );
};

export default SingleSpaceDetails;
