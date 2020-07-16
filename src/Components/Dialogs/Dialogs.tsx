import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

type DialogItemType = {
    name: string
    id: string
}
type MessageType = {
    message: string
}

const DialogItem = (props: DialogItemType) => {
    let path = '/dialogs/' + props.id;
    return(
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}
const Message = (props: MessageType) => {
    return <div className={s.message}>{props.message}</div>
}


const Dialogs = (props: any) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name='Vlad' id='1'/>
                <DialogItem name='Vladick' id='2'/>
                <DialogItem name='Dad' id='3'/>
                <DialogItem name='Vlados' id='4'/>
                <DialogItem name='Vladislav' id='5'/>
                <DialogItem name='Roman' id='6'/>
            </div>
            <div className={s.messages}>
                <Message message='Hi'/>
                <Message message='How are you'/>
                <Message message='You are adopted'/>
                <Message message='How is your learning going?'/>
                <Message message='Good morning'/>
            </div>
        </div>
    )
}

export default Dialogs