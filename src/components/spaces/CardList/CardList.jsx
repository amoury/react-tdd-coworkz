import React from 'react';
import { PropTypes } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';


import SpaceCard from '../SpaceCard';
import Loader from '../../layout/Loader/Loader';



const styles = {
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "flex-start"
  }
};

const CardList = (props) => {
  const { classes, spaces } = props;
  if (spaces.length <= 0) return <div><Loader /></div>;

  const renderSpaceCards = spaces.map( space => (
    <SpaceCard key={space.id} space={space}/>
  ))

  return (
    <div className={classes.root}>
      { renderSpaceCards }
    </div>
  )
}


CardList.propTypes = {
  classes: PropTypes.object.isRequired
}


export default withStyles(styles)(CardList)
