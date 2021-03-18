import React from 'react'
import { Link } from 'react-router-dom'
import PlayNowButton from '../Buttons/PlayNowButton'

import classes from './UnderDevelopment.module.css'

const UnderDevelopment = () => {
    return (
        <section>
            <h1>This part of the website is still under development!</h1>
            <p>In the meantime, do not miss a chance to <Link to="/play"><span>play Speed-Typist</span></Link> and improve your typing speed!</p>
            <PlayNowButton />
        </section>
    )
}

export default UnderDevelopment
