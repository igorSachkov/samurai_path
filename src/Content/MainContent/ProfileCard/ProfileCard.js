import c from "./ProfileCard.module.css"
import ProfileAvatar from "./ProfileAvatar/ProfileAvatar";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import ProfilePagePost from "./ProfilePagePost/ProfilePagePost";


const ProfileCard = function () {
    return (
        <div className={c.profile}>
            <div className={c.background}></div>
            <div className={c.profile__card}>
                <ProfileAvatar></ProfileAvatar>
                <div>
                    <div>Евгений Левобережный</div>
                    <div className={c.mail}>evgeniy@mail.ru</div>
                </div>
            </div>
            <ProfileStatus />
            <div>
                <ProfilePagePost />
            </div>
        </div>

    )
}

export default ProfileCard;