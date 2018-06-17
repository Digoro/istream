import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import image from './Type.jpg'

import './MainSingleGrid.css'

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    height: '867px',
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: 'white',
    fontSize: '66px',
    height: '66px',
    lineHeight: '60px'
  },
  subtitle: {
    fontSize: '66px',
    height: '66px'
  },
  titleBar: {
    height: '314px',
    paddingLeft: '100px',
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
});

const data = [
  {
    img: image,
    subtitle: '모르는 부분만 쏙쏙!',
    title: '라이브 스트리밍으로 받는 과외',
  },
  {
    img: image,
    subtitle: '모르는 부분만 쏙쏙!',
    title: '라이브 스트리밍으로 받는 과외',
  },
  {
    img: image,
    subtitle: '모르는 부분만 쏙쏙!',
    title: '라이브 스트리밍으로 받는 과외',
  },
]

function MainSingleGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={1} cellHeight={867}>
        {data.map((d, idx) => (
          <GridListTile key={idx}>
            <img src={d.img} alt={d.title} />
            <GridListTileBar className="i-main-single-grid"
              title={d.subtitle}
              subtitle={d.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
                subtitle: classes.subtitle
              }}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

MainSingleGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MainSingleGrid);