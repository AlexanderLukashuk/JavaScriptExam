import React from 'react';
import style from './Photo.module.css'

const Photo = (props) => {
    const { item } = props;
    console.log();
    return <>
        <div className={style.itemWrapper}>
            <div>{item}</div>
        </div>
    </>
}

export default Photo