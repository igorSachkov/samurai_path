import ProfileHeader from "./ProfileHeader/ProfileHeader";
import ProfileMain from "./ProfileMain/ProfileMain";
import ProfilePagePost from "./ProfilePagePost/ProfilePagePost";



const ProfileCard = function (props) {
    return (
        <div>
            <ProfileHeader mainProfile={props.mainProfile} />
            <ProfileMain mainProfile={props.mainProfile} />
            <ProfilePagePost mainProfile={props.mainProfile}/>
        </div>
    )
}

export default ProfileCard;