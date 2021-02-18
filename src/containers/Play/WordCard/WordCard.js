import React from 'react'
import classes from './WordCard.module.css'

const WordCard = (props) => {
    return (
        <div className={classes.WordCard}>
            <div className={classes.Word}>
                <h3>{props.word}</h3>
            </div>
            <div className={classes.CountDown}>
                <h2>Time Left</h2>
                <h3>{props.inGameCountDown}</h3>
            </div>
        </div>
    )
}

export default WordCard
