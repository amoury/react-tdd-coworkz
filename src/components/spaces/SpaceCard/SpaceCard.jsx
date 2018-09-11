import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { header2, merri } from '../../../variables';


import {
  withStyles,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  IconButton,
  Divider
} from "@material-ui/core";
import { LocationOn, Smartphone } from "@material-ui/icons";
import FavoriteIcon from '@material-ui/icons/Favorite';

const styles = {
  card: {
    maxWidth: window.innerWidth / 5,
    marginTop: 20,
    width: "300px",
    marginRight: 10,
    marginLeft: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    transition: "all 0.3s ease-out"
  },
  media: {
    height: 140,
    width: "100%"
  },
  link: {
    textDecoration: 'none',
    color: "inherit"
  },
  header2: {
    textAlign: 'center'
  },
  icon: {
    padding: "10px 5px 0 0",
    fontSize: "1em"
  },
  metaText: {
    fontFamily: merri,
    fontSize: "1em"
  }
};

export const SpaceCard = props => {
  const { classes, space } = props;

  return (
    <Card className={classes.card}>
      <CardActionArea style={{ width: "100%"}}>
        <CardMedia
          className={classes.media}
          image={space && space.mainImage ? space.mainImage.headerURL : null }
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2" style={header2}>
            {space ? space.name : "Coworking Space"}
          </Typography>
          <Divider light />
          
          <Typography component="p" className={classes.metaText}>
            <Smartphone className={classes.icon}/>
            {space && space.contactInfo ? space.contactInfo.contactNumber : null}
          </Typography>
          
          <Typography component="p" className={classes.metaText}>
            <LocationOn className={classes.icon}/>
            {space && space.location ? space.location.address : null}
          </Typography>

        </CardContent>
      </CardActionArea>
      <CardActions>
        <IconButton aria-label="Add to favorites">
          <FavoriteIcon color="error" />
        </IconButton>

        <Button
          variant="outlined"
          color="primary"
          className={classes.button}
        >
          <Link to={`/spaces/${ space ? space.id : 'not-found'}`} className={classes.link}> View Details </Link>
        </Button>
      </CardActions>
    </Card>
  );
};

SpaceCard.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(SpaceCard);
