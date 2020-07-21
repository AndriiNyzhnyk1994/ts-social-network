import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";

type PropsType = {

    profilePage: ProfilePageType
    addPost: (postType: string) => void
    updateNewPostText: (newType: string) => void
}

export const Profile = (props: PropsType) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts
                updateNewPostText={props.updateNewPostText}
                posts={props.profilePage.posts}
                newPostText={props.profilePage.newPostText}
                addPost={props.addPost}/>

        </div>
    )
}
