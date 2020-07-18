import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {Button} from "@material-ui/core";




const MyPosts = () => {

    let posts = [
        {id: '1', message: 'Hi, I\'m the real Ryan Gosling. Please send me money for a new movie. I will return twice as much money. Here are my bank account number: 5585 5412 3365 8187.\n' + 'P.S. Account holder\'s name: Sergey Kovalenko (don\'t worry, just my account was blocked).',
            likesCount: 12},
        {id: '2', message: 'So that?? Will you send money ??? I`m really needed', likesCount: 10},
        {id: '2', message: 'Send me money and I\'ll tell on my twitter that you are a cool man ;)', likesCount: 9},
    ];

    let postsElements = posts.map( p => <Post message={p.message} likesCount={p.likesCount}/> )

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