import c from "./ProfileCard.module.css"
import ProfileAvatar from "./ProfileAvatar/ProfileAvatar";
const ProfileCard = function () {
    return (
        <div>
            <div className={c.background}></div>
            <div className={c.profile__card}>
                <ProfileAvatar></ProfileAvatar>
                <div>Евгений Пригожин</div>
            </div>
        </div>

    )
}

export default ProfileCard;