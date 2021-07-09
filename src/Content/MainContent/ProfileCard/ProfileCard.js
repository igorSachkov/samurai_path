import ProfileHeader from "./ProfileHeader/ProfileHeader";
import ProfileMain from "./ProfileMain/ProfileMain";
import ProfilePagePost from "./ProfilePagePost/ProfilePagePost";
import ProfileSideBar from "./ProfileSideBar/ProfileSideBar";
import c from "./ProfileCard.module.css"



const ProfileCard = function (props) {
   
    return (
        <div>
            <ProfileHeader mainProfile={props.state.mainProfile} />
            <div className={c.profileMain}>
                <ProfileMain mainProfile={props.state.mainProfile} />
                <ProfilePagePost mainProfile={props.state.mainProfile} />
            </div>

            <div className={c.profileSideBar}>
                <ProfileSideBar state={props.state.friends}/>
            </div>
        </div>

    )
}

export default ProfileCard;