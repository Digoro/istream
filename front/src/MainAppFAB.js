import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'

const styles = theme => ({
  fab: {
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
  }
})

function FloatingActionButtons(props) {
  const { classes } = props
  return (
    <div>
      <Button variant="fab" color="primary" aria-label="add" className={classes.fab}>
        <AddIcon />
      </Button>
    </div>
  )
}

FloatingActionButtons.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(FloatingActionButtons)