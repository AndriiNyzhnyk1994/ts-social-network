import React from "react";
import s from './Post.module.css';


type PropsPostType = {
    message: string
    likesCount: number
}

const Post = (props: PropsPostType) => {
    return (
        <div className={s.item}>
            <img src="https://i.insider.com/5b1ec7d042e1cc753b0945fb?width=1100&format=jpeg&auto=webp"/>
            <span>{props.message}</span>
            <div>
                <span>Like {props.likesCount}</span>
            </div>
        </div>
    )
}


export default Post;