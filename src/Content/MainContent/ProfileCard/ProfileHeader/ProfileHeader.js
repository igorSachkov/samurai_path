import c from "./ProfileHeader.module.css"
import userDefault from "./../../../Images/userDefault.jpg"

const ProfileHeader = function (props) {
    

    return (
        <div>
            <div className={c.background}>
                <img src={props.mainProfile.background} alt="profile background"></img>
            </div>
            <div className={c.profile__card}>
                <div className={c.wrapper__ava}>
                    <img className={c.ava} alt="avatar" src={props.profile.photos.large ? props.profile.photos.large : userDefault}></img>
                </div>
                <div>
                    <div>{props.profile.fullName}</div>
                    <div className={c.mail}>{`UserID: ${props.profile.userId}`}</div>
                </div>
            </div>
        </div>
    )
}

export default ProfileHeader;