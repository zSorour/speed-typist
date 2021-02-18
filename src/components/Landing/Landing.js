import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import classes from './Landing.module.css'

const Landing = () => {

    const history = useHistory();

    return (
        <div className={classes.Landing}>
            <h3>Play, Compete, and Improve Your Typing Speed!</h3>
            <ol>
                <li>Type with caution! Be precise and type the words correctly!</li>
                <li>Do not be late! Timer ended? Game over.</li>
                <li>Need improvement? Check our <Link to="/guide-to-faster-typing-speed" style={{ fontWeight: "bold" }}>guide</Link>!</li>
            </ol>
            <button onClick={() => history.push('/signin')}>Play Now!</button>
        </div>
    )
}

export default Landing
