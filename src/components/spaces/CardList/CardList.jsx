import React from 'react';
import { PropTypes } from 'prop-types';


import SpaceCard from '../SpaceCard';
import Loader from '../../layout/Loader/Loader';



const styles = {
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center"
  }
};

const CardList = (props) => {
  const { spaces } = props;
  if (spaces.length <= 0) return <div><Loader /></div>;

  const renderSpaceCards = spaces.map( space => (
    <SpaceCard key={space.id} space={space}/>
  ))

  return (
    <div style={styles.root}>
      { renderSpaceCards }
    </div>
  )
}


CardList.propTypes = {
  spaces: PropTypes.array
}


export default CardList;
