import { AppBar, Toolbar} from '@mui/material'
import { makeStyles } from '@mui/styles';
import React from 'react'
import { NavLink } from 'react-router-dom';

const useStyle = makeStyles({
    header: {
        background: '#600047'
    },

    links: {
        color:'#fefefe',
        padding:'1rem',
        textDecoration: 'none'
    }
})

function Navbar() {
    const classes = useStyle();
    return (
  <AppBar position="static" >
      <Toolbar className={classes.header}>
          <NavLink  className={classes.links} to="/" exact>vdi</NavLink>
          <NavLink  className={classes.links} to="all" exact>All Confession</NavLink>
          <NavLink  className={classes.links} to="add" exact>Add Confession</NavLink>
      </Toolbar>
  </AppBar>
    )
}

export default Navbar
