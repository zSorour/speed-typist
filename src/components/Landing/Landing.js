import React from 'react'
import { Link } from 'react-router-dom'
import classes from './Landing.module.css'

import PlayNowButton from '../Buttons/PlayNowButton'

const Landing = () => {
    return (
        <div className={classes.Landing}>
            <h3>Play, Compete, and Improve Your Typing Speed!</h3>
            <ol>
                <li>Type with caution! Be precise and type the words correctly!</li>
                <li>Do not be late! Timer ended? Game over.</li>
                <li>Need improvement? Check our <Link to="/guide" style={{ fontWeight: "bold" }}>guide</Link>!</li>
            </ol>
            <PlayNowButton />
        </div>
    )
}

export default Landing
