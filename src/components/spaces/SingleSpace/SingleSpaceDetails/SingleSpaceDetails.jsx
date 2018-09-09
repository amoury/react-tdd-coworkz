import React from 'react';
import {Grid} from "@material-ui/core";
import { LocationOn, Smartphone, Link } from '@material-ui/icons';
import styled from 'styled-components';


import { montserrat, merri } from '../../../../variables';
import SingleSpaceOverview from './SingleSpaceOverview';
import SingleSpaceAmenties from './SingleSpaceAmenties';

const Header1 = styled.h1`
  font-family: ${montserrat};
  font-weight: 500;
`;


const LocationText = styled.p`
  font-family: ${merri};
  font-size: 0.8em;
`

const styles = {
  locationIcon : {
    paddingRight: "10px",
    fontSize: "1.2em"
  }
}

const SingleSpaceDetails = () => {
  return <Grid item md={8} sm={12}>
      <Grid container>
        <Grid item md={2} sm={false} />
        <Grid item md={10} sm={12}>
          <Header1>Impact Hub Dubai</Header1>
          <LocationText>
            <LocationOn style={styles.locationIcon} />
            Sample address, Dubai, UAE
          </LocationText>
          <LocationText>
            <Smartphone style={styles.locationIcon} />
            +971 4 2332879
          </LocationText>
          <LocationText>
            <Link style={styles.locationIcon} />
            www.impacthub.ae
          </LocationText>

          <hr/>

          
          <SingleSpaceOverview />
          <SingleSpaceAmenties />
         
        </Grid>
      </Grid>

      <Grid container>
        
      </Grid>
    </Grid>;
}

export default SingleSpaceDetails
