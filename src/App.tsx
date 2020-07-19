import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import {Profile} from "./Components/Profile/Profile";
import {Dialogs} from './Components/Dialogs/Dialogs';
import {BrowserRouter, Route} from "react-router-dom";
import { RootStateType } from "./redux/state";

type PropsType = {
    state: RootStateType
}

const App = (props: PropsType) => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs'
                           render={ () => <Dialogs
                               state={props.state.dialogsPage}/>}/>
                    <Route path='/profile'
                           render={ () => <Profile
                               state={props.state.profilePage} />}/>
                </div>

            </div>
        </BrowserRouter>
    );
}

export default App;
