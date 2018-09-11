import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux";

import Navigation from "../../components/layout/Navigation";
import Jumbotron from "../../components/layout/Jumbotron/Jumbotron";
import SingleSpaceDetails from "../../components/spaces/SingleSpace/SingleSpaceDetails";
import SingleSpaceLocation from "../../components/spaces/SingleSpace/SingleSpaceLocation";
import Loader from '../../components/layout/Loader/Loader';
import { editHeaderImageAsync } from '../../actions/spaceActions';

class SingleSpacePage extends Component {

  onHeaderImageChange = (imageDetails) => {
    imageDetails.id = this.props.match.params.id;
    this.props.editHeaderImageAsync(imageDetails);
  };

  render() {
    const currentId = this.props.match.params.id;
    const currentSpace = this.props.spaces.filter( space => space.id === currentId)[0];
    
    if(!currentSpace) return <Loader/>

    
    return (
      <div>
        <Navigation />
        <Jumbotron onImageChange={this.onHeaderImageChange} image={currentSpace.mainImage} />

        <Grid container spacing={24}>
          <SingleSpaceDetails space={currentSpace}  />

          <SingleSpaceLocation coordinates={currentSpace.location.coordinates} name={currentSpace.name}/>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  spaces: state.spaces
});

export default connect(mapStateToProps, { editHeaderImageAsync })(SingleSpacePage);
