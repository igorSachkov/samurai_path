import ProfileHeader from "./ProfileHeader/ProfileHeader";
import ProfilePagePost from "./ProfilePagePost/ProfilePagePost";
import ProfileSideBar from "./ProfileSideBar/ProfileSideBar";
import c from "./ProfileCard.module.css"
import Preloader from "./../../Common/Preloader"
import ProfileStatusWithHooks from "./ProfileMain/ProfileStatusWithHooks";

const ProfileCard = function (props) {

    if(!props.profile) {
        return <Preloader />
    }
   
    return (
        <div>
            <ProfileHeader mainProfile={props.mainProfile} profile={props.profile}/>
            <div className={c.profileMain}>
                <ProfileStatusWithHooks 
                updateProfileStatusThunk={props.updateProfileStatusThunk} profileId={props.profileId} 
                getProfileStatusThunk={props.getProfileStatusThunk} status={props.status} mainProfile={props.mainProfile} 
                updateProfileChangeStatusTextArea={props.updateProfileChangeStatusTextArea}/>
                <ProfilePagePost mainProfile={props.mainProfile} />
            </div>

            <div className={c.profileSideBar}>
                <ProfileSideBar friends={props.friends}/>
            </div>
        </div>

    )
}

export default ProfileCard;