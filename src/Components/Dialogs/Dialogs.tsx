import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogs = (props: any) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to='/dialogs/1'>Victor</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/2'>Vitya</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/3'>Dad</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/4'>Hanna</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>How are you</div>
                <div className={s.message}>You are adopted</div>
                <div className={s.message}>How is your training going?</div>
            </div>
        </div>
    )
}

export default Dialogs