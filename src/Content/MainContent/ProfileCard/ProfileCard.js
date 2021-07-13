import ProfileHeader from "./ProfileHeader/ProfileHeader";
import ProfileMain from "./ProfileMain/ProfileMain";
import ProfilePagePost from "./ProfilePagePost/ProfilePagePost";
import ProfileSideBar from "./ProfileSideBar/ProfileSideBar";
import c from "./ProfileCard.module.css"



const ProfileCard = function (props) {
   
    return (
        <div>
            <ProfileHeader mainProfile={props.store._state.profilePage.mainProfile} />
            <div className={c.profileMain}>
                <ProfileMain store = {props.store} />
                <ProfilePagePost mainProfile={props.store._state.profilePage.mainProfile} />
            </div>

            <div className={c.profileSideBar}>
                <ProfileSideBar state={props.store._state.profilePage.friends}/>
            </div>
        </div>

    )
}

export default ProfileCard;