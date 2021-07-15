import c from "./Users.module.css"

const Users = (props) => {

    //временная заглушка
    if (props.users.length === 0) {
        props.setUsers([{ id: 1, fullName: "Kostya", status: "Лев сильнее волка, но волк в цирке не выступает", location: { city: "Volgograd", country: "Russia" }, followed: true, avatarURL: "https://image.freepik.com/free-photo/portrait-joyful-young-man-white-shirt_171337-17467.jpg" },
        { id: 2, fullName: "Svirepy", status: "Настоящий мужик должен", location: { city: "St. Petersburg", country: "Russia" }, followed: false, avatarURL: "https://image.freepik.com/free-photo/portrait-smiling-young-man-eyewear_171337-4842.jpg" },
        { id: 3, fullName: "Masha", status: "oh my", location: { city: "Kiev", country: "Ukraine" }, followed: true, avatarURL: "https://image.freepik.com/free-photo/cheerful-middle-aged-woman-with-curly-hair_1262-20859.jpg" },
        { id: 4, fullName: "Karl", status: "cool", location: { city: "Berlin", country: "Germany" }, followed: false, avatarURL: "https://image.freepik.com/free-vector/public-approval-concept-with-character_23-2148395692.jpg" }])
    }
    return <div>
        {props.users.map(e => {

            return (
                <div key={e.id} className={c.profileContainer}>
                    <div className={c.profileMainWrapper}>
                        <div className={c.avatarWrapper}>
                            <img src={e.avatarURL} alt="profile-avatar" />
                        </div>
                        <div className={c.btnWrapper}>
                            {e.followed
                                ? <button onClick={() => props.unfollow(e.id)}>unfollow</button>
                                : <button onClick={() => props.follow(e.id)}>follow</button>}
                        </div>
                    </div>
                    <div className={c.profileSecondWrapper}>
                        <div className={c.name}>{e.fullName}</div>
                        <div className={c.status}>{e.status}</div>
                    </div>
                    <div className={c.profileLocationWrapper}>
                                <div>{e.location.city}</div>
                                <div>{e.location.country}</div>
                    </div>

                </div>
            )
        })}
    </div>
}

export default Users