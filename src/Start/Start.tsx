import React from 'react';
import start from './start.jpg';
import style from './Start.module.css';

function Start():JSX.Element {
    return (
        <div>
            <div className={style.start_page}>
                <img src={start} alt="logo" />
            </div>
        </div>
    );
}
export default Start;
