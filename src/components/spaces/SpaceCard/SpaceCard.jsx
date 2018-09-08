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
  IconButton,
  Divider
} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";

const styles = {
  card: {
    maxWidth: window.innerWidth / 5,
    marginTop: 20,
    marginRight: 10,
    marginLeft: 10,
    transition: "all 0.3s ease-out"
  },
  media: {
    height: 140
  }
};

const SpaceCard = props => {
  const { classes, space } = props;

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
            {space ? space.name : "Coworking Space"}
          </Typography>
          <Divider light />
          <Typography component="p">
            {space
              ? space.international_phone_number
              : null}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <IconButton aria-label="Add to favorites">
          <FavoriteIcon color="error" />
        </IconButton>
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
