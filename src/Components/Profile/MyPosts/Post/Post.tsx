import React from "react";
import s from './Post.module.css';


const Post = () => {
    return (
        <div className={s.item}>
            <img src="https://i.insider.com/5b1ec7d042e1cc753b0945fb?width=1100&format=jpeg&auto=webp"/>
            Post 1
            <div>
                <span>Like</span>
            </div>
        </div>
    )
}


export default Post;