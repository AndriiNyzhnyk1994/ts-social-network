import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPageType} from "../../redux/state";


type PropsType = {
    state: DialogsPageType
}

export const Dialogs = (props: PropsType) => {

    let dialogsElements = props.state.dialogs
        .map( (d: {id: number, name: string}) => <DialogItem name={d.name} id={d.id} key={d.id}/> );

    let messagesElements = props.state.messages
        .map( (m: {id: number, message: string}) => <Message message={m.message} id={m.id} key={m.id} /> );


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

