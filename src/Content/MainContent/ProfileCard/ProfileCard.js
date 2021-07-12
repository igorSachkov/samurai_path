import ProfileHeader from "./ProfileHeader/ProfileHeader";
import ProfileMain from "./ProfileMain/ProfileMain";
import ProfilePagePost from "./ProfilePagePost/ProfilePagePost";
import ProfileSideBar from "./ProfileSideBar/ProfileSideBar";
import c from "./ProfileCard.module.css"



const ProfileCard = function (props) {
   
    return (
        <div>
            <ProfileHeader mainProfile={props.profilePage.mainProfile} />
            <div className={c.profileMain}>
                <ProfileMain mainProfile={props.profilePage.mainProfile} />
                <ProfilePagePost mainProfile={props.profilePage.mainProfile} />
            </div>

            <div className={c.profileSideBar}>
                <ProfileSideBar state={props.profilePage.friends}/>
            </div>
        </div>

    )
}

export default ProfileCard;