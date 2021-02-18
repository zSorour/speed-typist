import React from 'react'
import classes from './SideDrawer.module.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import Backdrop from '../../UI/Backdrop/Backdrop'

const SideDrawer = (props) => {

    let sideDrawerClasses = [classes.SideDrawer, classes.Closed];

    if (props.open) {
        sideDrawerClasses = [classes.SideDrawer, classes.Opened];
    }

    return (
        <>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={sideDrawerClasses.join(' ')}>
                <Logo clicked={props.closed} />
                <hr/>
                <NavigationItems clicked={props.closed} />
            </div>
        </>

    )
}

export default SideDrawer
