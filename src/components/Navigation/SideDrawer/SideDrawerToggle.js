import React from 'react'
import classes from './SideDrawerToggle.module.css'
const SideDrawerToggle = (props) => {
    return (
        <div className={classes.SideDrawerToggle} onClick={props.clicked}>
            <i className="fas fa-bars"></i>
        </div>
    )
}

export default SideDrawerToggle
