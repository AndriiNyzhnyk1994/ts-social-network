import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import {Profile} from "./Components/Profile/Profile";
import {Dialogs} from './Components/Dialogs/Dialogs';
import {Route} from "react-router-dom";
import {RootStateType} from "./redux/state";

type PropsType = {
    state: RootStateType
    addPost: (postText: string) => void
    updateNewPostText: (newText: string) => void
}

const App = (props: PropsType) => {

    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs'
                       render={() => <Dialogs
                           state={props.state.dialogsPage}
                       />}
                />
                <Route path='/profile'
                       render={() => <Profile
                           updateNewPostText={props.updateNewPostText}
                           profilePage={props.state.profilePage}
                           addPost={props.addPost}
                       />}
                />
            </div>
        </div>

    );
}

export default App;
