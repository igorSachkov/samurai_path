import ProfileHeader from "./ProfileHeader/ProfileHeader";
import ProfileMain from "./ProfileMain/ProfileMain";
import ProfilePagePost from "./ProfilePagePost/ProfilePagePost";
import ProfileSideBar from "./ProfileSideBar/ProfileSideBar";
import c from "./ProfileCard.module.css"



const ProfileCard = function (props) {
   
    return (
        <div>
            <ProfileHeader mainProfile={props.mainProfile} />
            <div className={c.profileMain}>
                <ProfileMain mainProfile={props.mainProfile} dispatch={props.dispatch}/>
                <ProfilePagePost mainProfile={props.mainProfile} />
            </div>

            <div className={c.profileSideBar}>
                <ProfileSideBar state={props.friends}/>
            </div>
        </div>

    )
}

export default ProfileCard;