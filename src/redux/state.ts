export type PostType = {
    id: number,
    message: string,
    likesCount: number
}
export type DialogType = {
    id: number,
    name: string
}
export type MessageType = {
    id: number,
    message: string
}
type FriendType = {
    id: number,
    photo: string,
    name: string
}

////////////

export type ProfilePageType = {
    posts: Array<PostType>
}
export type DialogsPageType = {
    dialogs: Array<DialogType>,
    messages: Array<MessageType>
}
export type FriendsPageType = {
    friends: Array<FriendType>
}
type SidebarType = {}



////////////


export type RootStateType = {
    profilePage: ProfilePageType,
    dialogsPage: DialogsPageType,
    friendsPage: FriendsPageType,
    sidebar: SidebarType
}

let state: RootStateType = {
    profilePage: {
        posts: [
            {
                id: 1,
                message: 'Hi, I\'m the real Ryan Gosling. Please send me money for a new movie. I will return twice as much money. Here are my bank account number: 5585 5412 3365 8187.\n' + 'P.S. Account holder\'s name: Sergey Kovalenko (don\'t worry, just my account was blocked).',
                likesCount: 12
            },
            {id: 2, message: 'So that?? Will you send money ??? I`m really needed', likesCount: 10},
            {id: 3, message: 'Send me money and I\'ll tell on my twitter that you are a cool man ;)', likesCount: 9},
        ]
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Vlad'},
            {id: 2, name: 'Vladick'},
            {id: 3, name: 'Dad'},
            {id: 4, name: 'Vlados'},
            {id: 5, name: 'Vladislav'},
            {id: 6, name: 'Roman'}
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you'},
            {id: 3, message: 'You are adopted'},
            {id: 4, message: 'How is your learning going?'},
            {id: 5, message: 'Good morning'},
            {id: 6, message: "You bastard!!! Give back my mom\'s chain!!!"}
        ]
    },
    sidebar: {},

    friendsPage: {
        friends: [
            {id: 1, photo: 'https://www.ivetta.ua/wp-content/uploads/2012/12/khoroshij-paren.jpg', name: 'Vlad'},
            {id: 2, photo: 'https://cs11.pikabu.ru/post_img/2019/02/19/7/155057366412019753.jpg', name: 'Polina'},
            {id: 3, photo: 'https://www.meme-arsenal.com/memes/402d1d65d9d161ff5cc1659e7456bb74.jpg', name: 'Vlados'},
        ]
    }

}

export default state;