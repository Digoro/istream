import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    minWidth: 568,
    minHeight: 502,
    display: 'inline-block',
    marginRight: '16px'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
};

function VideoComponent(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={props.data.thumbnail}
        title={props.data.title}
      />
      <CardContent>
        <Typography gutterBottom variant="headline" component="h2">
          {props.data.title}
        </Typography>
        <Typography component="p">
          {props.data.uid}
        </Typography>
        <Typography component="p">
          {props.data.hits}
        </Typography>
      </CardContent>
    </Card>
  );
}

VideoComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(VideoComponent);