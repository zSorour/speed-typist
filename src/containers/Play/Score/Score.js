import React from 'react'
import classes from './Score.module.css'

const Score = (props) => {
    return (
        <div className={classes.Score}>
            <h3> Current Score: {props.currentScore}</h3>
            <h3>Your Top Score: {props.personalTopScore}</h3>
            <h3>Global Top Score: {props.globalTopScore}</h3>
        </div>
    )
}

export default Score
