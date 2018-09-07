import React from "react";
import PropTypes from "prop-types";

import {
  withStyles,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  IconButton
} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";

const styles = {
  card: {
    maxWidth: 300,
    marginTop: 20,
    marginRight: 10,
    marginLeft: 10

  },
  media: {
    height: 140
  }
};

const SpaceCard = props => {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://source.unsplash.com/random/400x300"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            Lizard
          </Typography>
          <Typography component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <IconButton aria-label="Add to favorites">
          <FavoriteIcon color="error"/>
        </IconButton>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          View Details
        </Button>
      </CardActions>
    </Card>
  );
};

SpaceCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SpaceCard);
