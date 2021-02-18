import React from 'react'
import NavigationItems from '../NavigationItems/NavigationItems'
import classes from './NavigationBar.module.css'
import Logo from '../../Logo/Logo'
import SideDrawerToggle from '../SideDrawer/SideDrawerToggle'

const NavigationBar = (props) => {
    return (
        <div className={classes.NavigationBar}>
            <SideDrawerToggle clicked={props.clicked} />
            <Logo />
            <nav>
                <NavigationItems />
            </nav>
        </div>
    )
}

export default NavigationBar
