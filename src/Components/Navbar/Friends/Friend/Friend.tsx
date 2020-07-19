import React from "react";
import s from './Friend.module.css';

type PropsType = {
    name: string,
    photo: string
}

export const Friend = (props: PropsType) => {
    return(
        <div className={s.friend}>
            <div className={s.photo}>
                <img src={props.photo}/>
            </div>
            <div className={s.name}>{props.name}</div>
        </div>
    )
}