import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'

import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'

import education from './category.svg'
import trip from './trip.svg'
import mukbang from './mukbang.svg'
import beauty from './beauty.svg'
import pet from './pet.svg'
import review from './review.svg'
import activity from './activity.svg'
import more from './more.svg'

const data = [
  {
    img: education,
  },
  {
    img: trip,
  },
  {
    img: mukbang,
  },
  {
    img: beauty,
  },
  {
    img: pet,
  },
  {
    img: review,
  },
  {
    img: activity,
  },
  {
    img: more,
  },
]

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    height: '520px'
  },
  gridList: {
    width: 432*4,
    height: 520,
  },
  gridItem: {
    padding: 0
  },
  subheader: {
    width: '100%',
  },
  header: {
    textAlign: 'center',
    fontSize: '55px',
    marginTop: '70px',
    marginBottom: '70px',
  }
});

function CategoryGrid(props) {
  const { classes } = props

  return (
    <div style={{marginBottom: "82px"}}>
      <h1 className={classes.header}>Category</h1>
      <div className={classes.root}>
        <GridList cellHeight={254} className={classes.gridList} cols={4}>
          {data.map((d, idx) => (
              <GridListTile key={idx}>
                <Link to={'/list/' + idx} key={idx} >
                  <img src={d.img} alt="카테고리" />
                </Link>
              </GridListTile>
          ))}
        </GridList>
      </div>
    </div>
  )
}

CategoryGrid.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(CategoryGrid)