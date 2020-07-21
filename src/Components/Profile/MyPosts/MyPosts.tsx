import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {Button} from "@material-ui/core";
import {PostType} from "../../../redux/state";


type PropsType = {
    posts: Array<PostType>,
    addPost: (postType: string) => void
    updateNewPostText: (newType: string) => void
    newPostText: string
}


const MyPosts = (props: PropsType) => {

    let postsElements = props.posts.map((p: { message: string; likesCount: number; }) =>
        <Post message={p.message} likesCount={p.likesCount}/>)


    let newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPost = () => {
        if (newPostElement.current) {
            props.addPost(newPostElement.current.value);

        }
    }

    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value);
    }


    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea
                        onChange={onPostChange}
                        ref={newPostElement}
                        value={props.newPostText}/>
                </div>
                <div>
                    <Button onClick={addPost} variant={'contained'} size={'small'}>Add post</Button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;