import React from 'react';
import { PropTypes } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';


import SpaceCard from '../SpaceCard';



const styles = {
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-start"
  }
};

const CardList = (props) => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <SpaceCard/>
      <SpaceCard/>
      <SpaceCard/>
      <SpaceCard/>
      <SpaceCard/>
    </div>
  )
}


CardList.propTypes = {
  classes: PropTypes.object.isRequired
}


export default withStyles(styles)(CardList)
