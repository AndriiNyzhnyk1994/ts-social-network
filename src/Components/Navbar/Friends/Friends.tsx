import React from "react";
import s from "./Friends.module.css";
import {NavLink} from "react-router-dom";
import {Friend} from "./Friend/Friend";
import state from "../../../redux/state";


export const Friends = () => {
    return(
        <div className={s.friends}>
            <NavLink to='/friends' activeClassName={s.active}>Friends</NavLink>
            <div className={s.friendsList}>
                <Friend photo={state.friendsPage.friends[0].photo} name={state.friendsPage.friends[0].name}/>
                <Friend photo={state.friendsPage.friends[1].photo} name={state.friendsPage.friends[1].name}/>
                <Friend photo={state.friendsPage.friends[2].photo} name={state.friendsPage.friends[2].name}/>
            </div>

        </div>
    )
}