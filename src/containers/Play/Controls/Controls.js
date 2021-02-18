import React from 'react'
import classes from './Controls.module.css'

const Controls = (props) => {
    return (
        <div className={classes.Controls}>
            <button onClick={props.clicked}>{props.isPlaying ? 'Stop' : 'Play'}</button>
            <select value={props.defaultSelectValue}
                onChange={props.changed}
                disabled={props.isPlaying}>
                <option value="2">2 Seconds</option>
                <option value="3">3 Seconds</option>
                <option value="4">4 Seconds</option>
                <option value="5">5 Seconds</option>
            </select>
        </div>
    )
}

export default Controls
