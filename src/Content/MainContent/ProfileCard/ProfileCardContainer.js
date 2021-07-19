
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { changeProfileStatus, updateProfileChangeStatusTextArea, setUserProfile } from "../../../redux/profileReducer"
import ProfileClass from "./ProfileClass";


const mapStateToProps = (state) => {
    
    
    return {
        mainProfile: state.profilePage.mainProfile,
        friends: state.profilePage.friends,
        isFetching: state.profilePage.isFetching,
        profile: state.profilePage.profile
    }
}

const ProfileURLContainer = withRouter(ProfileClass)

const ProfileCardContainer = connect(mapStateToProps, {
    changeProfileStatus, updateProfileChangeStatusTextArea, setUserProfile
})(ProfileURLContainer)

export default ProfileCardContainer;