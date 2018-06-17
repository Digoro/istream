import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    display: 'inline-block',
    marginRight: '16px'
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 161,
    height: 161,
    margin: '0 auto'
  },
};

function StreamerProfile(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.cover}
        image={props.data.thumbnail}
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography variant="headline">{props.data.name}</Typography>
          <Typography variant="subheading" color="textSecondary">
            스트리밍 완료 {props.data.streamCount}건
          </Typography>
          <Typography variant="subheading" color="textSecondary">
            누적 시청자 {props.data.totalHits}명
          </Typography>
          <Typography variant="subheading" color="textSecondary">
            {props.data.score}
          </Typography>
        </CardContent>
      </div>
    </Card>
  );
}

StreamerProfile.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StreamerProfile);