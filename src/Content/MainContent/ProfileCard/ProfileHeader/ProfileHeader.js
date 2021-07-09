import c from "./ProfileHeader.module.css"


const ProfileHeader = function (props) {
    

    return (
        <div>
            <div className={c.background}>
                <img src={props.mainProfile.background} alt="profile background"></img>
            </div>
            <div className={c.profile__card}>
                <div className={c.wrapper__ava}>
                    <img className={c.ava} alt="avatar" src={props.mainProfile.avatar}></img>
                </div>
                <div>
                    <div>{props.mainProfile.profileName}</div>
                    <div className={c.mail}>{props.mainProfile.mail}</div>
                </div>
            </div>
        </div>
    )
}

export default ProfileHeader;