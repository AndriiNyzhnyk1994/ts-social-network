import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {Button} from "@material-ui/core";


const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <Button variant={'contained'} size={'small'}>Add post</Button>
                <Button variant={'contained'} size={'small'}>Remove</Button>

            </div>
            <div className={s.posts}>
                <Post
                    message='Hi, how are you?'
                    likesCount={9}
                />
                <Post
                    message='Nice social network, man!'
                    likesCount={12}
                />
            </div>
        </div>
    )
}

export default MyPosts;