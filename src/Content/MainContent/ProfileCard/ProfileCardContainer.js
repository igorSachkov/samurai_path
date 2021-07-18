import ProfileCard from "./ProfileCard";
import { connect } from "react-redux";
import { changeProfileStatus, updateProfileChangeStatusTextArea } from "../../../redux/profileReducer"


const mapStateToProps = (state) => {
    
    return {
        mainProfile: state.profilePage.mainProfile,
        friends: state.profilePage.friends
    }
}

const ProfileCardContainer = connect(mapStateToProps, {
    changeProfileStatus, updateProfileChangeStatusTextArea
})(ProfileCard)

export default ProfileCardContainer;