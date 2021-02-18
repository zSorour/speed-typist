import React from 'react'
import classes from './Modal.module.css'

const Modal = (props) => {

    let attachedClasses = [classes.Modal, classes.Closed]
    if (props.show) {
        attachedClasses = [classes.Modal, classes.Open]
    }

    return (
        <div className={attachedClasses.join(' ')}>
            {props.children}
        </div>
    )
}

export default Modal
