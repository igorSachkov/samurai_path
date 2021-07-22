import ProfileHeader from "./ProfileHeader/ProfileHeader";
import ProfileMain from "./ProfileMain/ProfileMain";
import ProfilePagePost from "./ProfilePagePost/ProfilePagePost";
import ProfileSideBar from "./ProfileSideBar/ProfileSideBar";
import c from "./ProfileCard.module.css"
import Preloader from "./../../Common/Preloader"
import { Redirect } from "react-router";



const ProfileCard = function (props) {

    if(!props.profile) {
        return <Preloader />
    }
   
    return (
        <div>
            <ProfileHeader mainProfile={props.mainProfile} profile={props.profile}/>
            <div className={c.profileMain}>
                <ProfileMain mainProfile={props.mainProfile} changeProfileStatus={props.changeProfileStatus} updateProfileChangeStatusTextArea={props.updateProfileChangeStatusTextArea}/>
                <ProfilePagePost mainProfile={props.mainProfile} />
            </div>

            <div className={c.profileSideBar}>
                <ProfileSideBar friends={props.friends}/>
            </div>
        </div>

    )
}

export default ProfileCard;