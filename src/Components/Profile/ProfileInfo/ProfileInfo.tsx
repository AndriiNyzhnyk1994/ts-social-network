import React from "react";
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div className={s.content}>
                <img
                    src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/433f9063-3d2f-4d4e-84a8-b5d676ac0f51/da8i24h-ef27f89c-b496-46db-af13-a1e959548c42.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNDMzZjkwNjMtM2QyZi00ZDRlLTg0YTgtYjVkNjc2YWMwZjUxXC9kYThpMjRoLWVmMjdmODljLWI0OTYtNDZkYi1hZjEzLWExZTk1OTU0OGM0Mi5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.jwfXb6A3nrI26mxkunV-hksCiSp5akL3z6BQevus1us"/>
            </div>
            <div className="s.descriptionBlock">
                ava + description
            </div>
        </div>

    )
}

export default ProfileInfo;