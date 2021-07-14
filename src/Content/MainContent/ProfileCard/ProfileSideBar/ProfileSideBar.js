
import c from "./ProfileSideBar.module.css"
import FriendItem from "./FriendItem/FriendItem";


const ProfileSideBar = function (props) {
    

    return (
        <div className={c.container}>
        <div className={c.contacts__container}>
            <div>Друзья</div>
            <div className={c.contacts__items}>
                <FriendItem friends={props.friends}/>
            </div>

        </div>

    </div>

    )
}

export default ProfileSideBar;