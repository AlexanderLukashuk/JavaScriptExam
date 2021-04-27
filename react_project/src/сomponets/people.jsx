import React from 'react';
import style from './People.module.css'

const People = (props) => {
    const { item } = props;
    console.log()
    return <>
        <div className={style.itemWrapper}>
            <div>{item.name}</div>
            <div>{item.birth_year}</div>
            <div>{item.created}</div>
            <div>{item.eye_color}</div>
            <div>{item.gender}</div>
            <div>{item.hair_color}</div>
            <div>{item.height}</div>
            <div>{item.skin_color}</div>
        </div>
    </>
}

export default People