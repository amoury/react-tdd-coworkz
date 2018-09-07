import React, { Component } from 'react';
import { Grid } from "@material-ui/core";
import axios from 'axios';

import Navigation from '../../components/layout/Navigation';
import CardList from '../../components/spaces/CardList';
import places from '../../data';


class HomePage extends Component {
  state = {
    showMap: false,
    spaces: places
  };

  componentDidMount = async () => {
    try {
      const locationData = await axios.get("http://ip-api.com/json");
      this.handleUserLocation(locationData);
    } catch(error) {
      console.error(error.message)
    }
    
  }
  
  handleUserLocation = ({data}) => {
    const userLocation = {};
    userLocation.city = data.city;
    userLocation.country = data.country;
    userLocation.coordinates = { lat: data.lat, lng: data.lon };
    
    this.setState({ userLocation });
  }


  handleMap = () => {
    this.setState({ showMap: !this.state.showMap })
  }

  render () {
    return (
      <div>
        <Navigation toggleMap={this.handleMap}/>
        <Grid container spacing={24}>
          <Grid item xs={12} md={ this.state.showMap ? 8 : 12 }>
            <CardList />
          </Grid>
          { this.state.showMap &&
            <Grid item xs={12} md={4}>
              Map
            </Grid>
          }
        </Grid>
       
      </div>
    );
  }
}

export default HomePage;