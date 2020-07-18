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
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}
const Message = (props: MessageType) => {
    return <div className={s.message}>{props.message}</div>
}


const Dialogs = (props: DialogItemType) => {
    //DATA
    let dialogs = [
        {id: '1', name: 'Vlad'},
        {id: '2', name: 'Vladick'},
        {id: '3', name: 'Dad'},
        {id: '4', name: 'Vlados'},
        {id: '5', name: 'Vladislav'},
        {id: '6', name: 'Roman'}
    ];
    let messages = [
        {id: '1', message: 'Hi'},
        {id: '2', message: 'How are you'},
        {id: '3', message: 'You are adopted'},
        {id: '4', message: 'How is your learning going?'},
        {id: '5', message: 'Good morning'},
        {id: '6', message: "You bastard!!! Give back my mom\'s chain!!!"}
    ];


    let dialogsElements = dialogs
        .map( d => <DialogItem name={d.name} id={d.id}/> );

    let messagesElements = messages
        .map( m => <Message message={m.message}/> );



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

export default Dialogs