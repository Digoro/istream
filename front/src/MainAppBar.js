import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import SearchIcon from '@material-ui/icons/Search'
import Button from '@material-ui/core/Button'

import './MainAppBar.css'
import logo from './icon.png'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  search: {
    margin: theme.spacing.unit,
    width: '382px',
    display: 'relative',
    right: 0,
  },
  button: {
    width: '200px',
    margin: theme.spacing.unit,
  },
  logoBox: {
    width: '180px',
    display: 'flex',
    alignItems: 'inherit'
  }
})

function ButtonAppBar(props) {
  const { classes } = props
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default" className="i-app-bar">
        <Toolbar className="i-tool-bar">
        <div className={classes.logoBox}>
          <img src={logo} alt="log" />
          <Typography variant="title" color="inherit">
            {props.title}
          </Typography>
          </div>
          <div>
          <TextField
            className={classes.search}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          <Link to='/stream'>
          <Button variant="contained" color="secondary" className={classes.button}>
            프로젝트 만들기
          </Button>
          </Link>
          <Button variant="outlined" className={classes.button}>
            Log In / Sign In
          </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ButtonAppBar)