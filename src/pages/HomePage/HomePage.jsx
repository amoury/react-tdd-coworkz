import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import axios from "axios";
import { CSSTransition } from "react-transition-group";

import Navigation from "../../components/layout/Navigation";
import CardList from "../../components/spaces/CardList";
import "./HomePage.css";
import MegaMap from "../../components/spaces/MegaMap/MegaMap";

class HomePage extends Component {
  state = {
    showMap: false,
    spaces: []
  };

  componentDidMount = async () => {
    try {
      const locationData = await axios.get("http://ip-api.com/json");
      this.handleUserLocation(locationData);
      const spacesData = await axios.get("https://react-zen-space.firebaseio.com/spaces.json");
      this.setState({ spaces: spacesData.data });
      const imagesData = await axios.get("https://firebasestorage.googleapis.com/v0/b/react-zen-space.appspot.com/o/Campus-03.jpeg?alt=media&token=8bbc04b3-a153-4dd5-a0a8-79323ff4d906");
      console.log(imagesData);

    } catch (error) {
      console.error(error.message);
    }
  };

  handleUserLocation = ({ data }) => {
    const userLocation = {};
    userLocation.city = data.city;
    userLocation.country = data.country;
    userLocation.coordinates = { lat: data.lat, lng: data.lon };

    this.setState({ userLocation });
  };

  handleMap = () => {
    this.setState({ showMap: !this.state.showMap });
  };

  render() {
    return (
      <div>
        <Navigation toggleMap={this.handleMap} />
        <Grid container spacing={24}>
          <Grid item xs={12} md={this.state.showMap ? 8 : 12}>
            <CardList spaces={this.state.spaces} />
          </Grid>

          <CSSTransition
            in={this.state.showMap}
            timeout={{ enter: 300, exit: 300 }}
            classNames="map"
            unmountOnExit
          >
            <Grid item xs={12} md={4} className="mega-map">
              <MegaMap
                userLocation={this.state.userLocation}
                spaces={this.state.spaces}
              />
            </Grid>
          </CSSTransition>
        </Grid>
      </div>
    );
  }
}

export default HomePage;
