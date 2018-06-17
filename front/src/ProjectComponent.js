import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import moment from 'moment'
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    minWidth: 568,
    minHeight: 502,
    display: 'inline-block',
    marginRight: '16px',
    marginBottom: '16px'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

function ProjectComponent(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary">
          요청자: {props.data.uid}
        </Typography>
        <Typography variant="headline" component="h2">
          <Link to={'/stream/' + props.data.rid}>
            {props.data.title}
          </Link>
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {props.data.description}
        </Typography>
        <Typography component="p">
          {props.data.price}$<br />
          마감일: {moment(props.data.deadline).format('YYYY-MM-DD HH:mm:ss')}
        </Typography>
      </CardContent>
    </Card>
  );
}

ProjectComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProjectComponent);