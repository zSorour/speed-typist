import React from 'react'
import classes from './Logo.module.css'
import {Link} from 'react-router-dom'

const Logo = (props) => {
    return (
        <Link to="/" onClick={props.clicked}>
            <div className={classes.Logo}>
                <h3>Speed Typist</h3>
            </div>
        </Link>
    )
}

export default Logo
