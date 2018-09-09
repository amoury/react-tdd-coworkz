import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

import Navigation from '../../components/layout/Navigation';
import Jumbotron from '../../components/layout/Jumbotron/Jumbotron';
import SingleSpaceDetails from '../../components/spaces/SingleSpace/SingleSpaceDetails';
import SingleSpaceLocation from '../../components/spaces/SingleSpace/SingleSpaceLocation';

class SingleSpacePage extends Component {
  render () {
    return <div>
        <Navigation />
        <Jumbotron />

        <Grid container spacing={24}>
          <SingleSpaceDetails />
          
          <SingleSpaceLocation/>
        </Grid>
        
      </div>;
  }
}

export default SingleSpacePage;