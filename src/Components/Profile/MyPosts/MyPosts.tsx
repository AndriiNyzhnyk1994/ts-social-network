import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {Button} from "@material-ui/core";
import {PostType} from "../../../redux/state";


type PropsType = {
    state: Array< PostType >
}


const MyPosts = (props: PropsType) => {

    let postsElements = props.state.map( (p: { message: string; likesCount: number; }) =>
        <Post message={p.message} likesCount={p.likesCount}/> )

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <Button variant={'contained'} size={'small'}>Add post</Button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;