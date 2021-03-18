import React from 'react'

import classes from './PlayNowButton.module.css'

import { useHistory } from 'react-router-dom'

const PlayNowButton = () => {

    const history = useHistory();

    return (
        <button onClick={() => history.push('/play')}>Play Now!</button>
    )
}

export default PlayNowButton
