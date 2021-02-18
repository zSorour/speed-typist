import React, { useState, useEffect, useRef } from 'react'
import classes from './Play.module.css'
import WordCard from './WordCard/WordCard'
import Controls from './Controls/Controls'
import Modal from '../../components/UI/Modal/Modal'
import randomWords from 'random-words'
import Score from './Score/Score'
import useSound from 'use-sound'
import stardCountdownFX from '../../soundFX/startCountdown.mp3'
import correctWordFX from '../../soundFX/correctWord.mp3'
import gameOverFX from '../../soundFX/gameOver.mp3'
import newHighScoreFX from '../../soundFX/newHighScore.mp3'


const Play = () => {

    const [currentWord, setCurrentWord] = useState(randomWords());
    const [defaultInGameSeconds, setDefaultInGameSeconds] = useState(3);
    const [secondsToGameOver, setSecondsToGameOver] = useState(defaultInGameSeconds);
    const [secondsToStart, setSecondsToStart] = useState(3);
    const [inputTextValue, setInputTextValue] = useState('');
    const [isPlaying, setIsPlaying] = useState(false);
    const [isStarting, setIsStarting] = useState(false);
    const [isGameOver, setIsGameOver] = useState(false);
    const [currentScore, setCurrentScore] = useState(0);
    const [personalTopScore, setPersonalTopScore] = useState(0);
    const [gameoverTimer, setGameOverTimer] = useState(null);
    const inputRef = useRef(null);

    //SOUND EFFECTS USING use-sound HOOK
    const [playStartCountdownFX] = useSound(stardCountdownFX, { volume: 0.7 });
    const [playCorrectWordFX] = useSound(correctWordFX, { volume: 0.5 });
    const [playgameOverFX] = useSound(gameOverFX, { volume: 0.3 });
    const [playNewHighScoreFX] = useSound(newHighScoreFX, { volume: 0.5 });


    //----------------------------------------------------------------
    //--------------------Start of Game Over Scenario-----------------
    //----------------------------------------------------------------
    //Start interval. Set the interval object to the gameOverTimer state
    const startGameOverTimer = () => {
        const timer = setInterval(() => {
            //we use the function syntax in setting the state to ensure that the latest value is used.
            setSecondsToGameOver((prevSecondsToGameOver) => prevSecondsToGameOver - 1);
        }, 1000);
        setGameOverTimer(timer);
    }
    //Stops the gameOverTimer interval, and sets its state to null
    const stopGameOverTimer = () => {
        clearInterval(gameoverTimer);
        setGameOverTimer(null);
    }
    //useEffect to monitor the change in the seconds left for game over. At 0, modify the state accordingly
    useEffect(() => {
        if (isPlaying) {
            if (secondsToGameOver === 0) {
                setIsPlaying(false);
                setIsGameOver(true);
                stopGameOverTimer();
                if (currentScore > personalTopScore) {
                    playNewHighScoreFX();
                    setPersonalTopScore(currentScore);
                }
                else {
                    playgameOverFX();
                }
            }
        }
    }, [secondsToGameOver]);
    //useEffect for displaying and hiding the game over overlay and modifying the state accordingly
    useEffect(() => {
        if (isGameOver) {
            const timer = setTimeout(() => {
                setIsGameOver(false);
                setSecondsToGameOver(defaultInGameSeconds);
                setCurrentScore(0);
                setInputTextValue('');
            }, 2000)
            return () => { clearTimeout(timer) }
        }
    }, [isGameOver, defaultInGameSeconds])

    //----------------------------------------------------------------
    //----------------------End of Game Over Scenario-----------------
    //----------------------------------------------------------------


    //START COUNTDOWN TIMER
    useEffect(() => {
        if (isStarting) {
            const timer = setTimeout(() => {
                if (secondsToStart >= 1) {
                    setSecondsToStart((prevSecondsToStart) => prevSecondsToStart - 1);
                }
                else {
                    setIsStarting(false);
                    setIsPlaying(true);
                    setSecondsToStart(3);
                    startGameOverTimer();
                    inputRef.current.focus();
                }
            }, 1000)

            return () => { clearTimeout(timer) }
        }
    }, [isStarting, secondsToStart])


    //MONITORING TEXT VALUE CHANGE
    useEffect(() => {
        if (isPlaying && inputTextValue.length === currentWord.length) {
            if (inputTextValue === currentWord) {
                playCorrectWordFX();
                setSecondsToGameOver(defaultInGameSeconds);
                setInputTextValue('');
                setCurrentWord(randomWords());
                setCurrentScore((prevCurrentScore)=> prevCurrentScore + 1);
                stopGameOverTimer();
                startGameOverTimer();
            }
        }
    }, [inputTextValue]);



    const inputChangeHandler = (event) => {
        setInputTextValue(event.target.value);
    }

    const playModeToggleHandler = () => {
        if (!isPlaying) {
            setIsStarting(true);
            playStartCountdownFX();
        }
        else {
            setIsPlaying(false);
            stopGameOverTimer();
            setCurrentScore(0);
        };
    }

    const defaultCountDownChangeHandler = (event) => {
        setDefaultInGameSeconds(parseInt(event.target.value));
        setSecondsToGameOver(parseInt(event.target.value));
    }

    return (
        <div className={classes.Play}>
            <Modal show={isStarting || isGameOver}>
                {isStarting && <h3 style={{ fontWeight: "bold", fontSize: "5em" }}>Starting in</h3>}
                {isStarting && <h3 style={{ fontWeight: "bold", fontSize: "5em" }}>{secondsToStart === 0 ? 'GO!' : secondsToStart}</h3>}
                {isGameOver && <h3 style={{ fontWeight: "bold", fontSize: "5em" }}>GAME OVER!</h3>}
            </Modal>

            <Score currentScore={currentScore} personalTopScore={personalTopScore} globalTopScore={243} />

            <WordCard
                word={currentWord === '' ? 'Press Play to start showing words' : currentWord}
                inGameCountDown={secondsToGameOver} />
            <h4>Type here</h4>
            <div className={classes.Input}>
                <input type="text"
                    disabled={!isPlaying}
                    value={inputTextValue}
                    onChange={inputChangeHandler}
                    ref={inputRef}
                    onPaste={(e) => { e.preventDefault() }} />
            </div>
            <Controls
                isPlaying={isPlaying}
                clicked={playModeToggleHandler}
                defaultSelectValue={defaultInGameSeconds}
                changed={defaultCountDownChangeHandler} />
        </div>
    )
}

export default Play
