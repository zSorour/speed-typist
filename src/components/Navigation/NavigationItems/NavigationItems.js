import React from 'react'
import classes from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem'

const NavigationItems = (props) => {
    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem link="/play" clicked={props.clicked}>Play Now!</NavigationItem>
            <NavigationItem link="/scoreboard" clicked={props.clicked}>Scoreboard</NavigationItem>
            <NavigationItem link="/guide" clicked={props.clicked}>Guide</NavigationItem>
        </ul>
    )
}

export default NavigationItems
