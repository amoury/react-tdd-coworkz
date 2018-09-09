import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

import Navigation from '../../components/layout/Navigation';
import Jumbotron from '../../components/layout/Jumbotron/Jumbotron';

class SingleSpacePage extends Component {
  render () {
    return <div>
        <Navigation />
        <Jumbotron />

        <Grid container spacing={24}>
          <Grid item md={8} sm={12}>
            Left Column
          </Grid>
          <Grid item md={4} sm={12}>
            Right Column
          </Grid>
        </Grid>
        
      </div>;
  }
}

export default SingleSpacePage;