import ProfileCard from "./ProfileCard";




const ProfileCardContainer = function (props) {
   
    return (
        <ProfileCard mainProfile={props.store.getState().profileReducer.mainProfile} friends={props.store.getState().profileReducer.friends} status={props.store.getState().profileReducer.mainProfile.status}
            mainProfile={props.store.getState().profileReducer.mainProfile} dispatch={props.store.dispatch}
        />
    )
}

export default ProfileCardContainer;