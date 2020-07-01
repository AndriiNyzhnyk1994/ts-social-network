import React from 'react';
import './App.css';

function App() {
    return (
        <div className="app-wrapper">
            <header className='header'>
                <img
                    src="https://lh3.googleusercontent.com/proxy/9uVLrNPurnGnksGQGE8zeDHvVV5OxF4ts9W6E8_lVJsGyEw_4XkGIqmzAXJy126UihbK1Tgi_ZN9J4pFdYsAg5tc39Kbt3W2FtY8wtDJXe43muSI8zVATA"
                    alt=""/>
            </header>
            <nav className='nav'>
                <div>
                    <a>Profile</a>
                </div>
                <div>
                    <a>Messages</a>
                </div>
                <div>
                    <a>News</a>
                </div>
                <div>
                    <a>Music</a>
                </div>
                <div>
                    <a>Settings</a>
                </div>

            </nav>
            <div className='content'>
                <div>
                    <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/433f9063-3d2f-4d4e-84a8-b5d676ac0f51/da8i24h-ef27f89c-b496-46db-af13-a1e959548c42.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNDMzZjkwNjMtM2QyZi00ZDRlLTg0YTgtYjVkNjc2YWMwZjUxXC9kYThpMjRoLWVmMjdmODljLWI0OTYtNDZkYi1hZjEzLWExZTk1OTU0OGM0Mi5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.jwfXb6A3nrI26mxkunV-hksCiSp5akL3z6BQevus1us"/>
                </div>
                <div>
                    avatar + description
                </div>
                <div>
                    My posts
                    <div>
                        New post
                    </div>
                    <div>
                        <div>
                            Post 1
                        </div>
                        <div>
                            Post 2
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
