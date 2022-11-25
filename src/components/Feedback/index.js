import React, { Component }  from 'react';
import styles from './Feedback.module.scss';

function Feedback (props) {
    return (
        <div className="overlay">
            <div className={styles.feedback}>
                <h2>Обратная связь
                    <img onClick={props.onClose} src="/img/btn-remove.svg" alt="Close" />
                </h2>
            </div>
        </div>
    )
}

export default Feedback