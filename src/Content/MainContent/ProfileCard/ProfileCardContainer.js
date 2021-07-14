import ProfileCard from "./ProfileCard";
import { connect } from "react-redux";
import { changeProfileStatus, updateProfileChangeStatusTextArea } from "../../../redux/profileReducer"


const mapStateToProps = (state) => {
    
    return {
        mainProfile: state.profilePage.mainProfile,
        friends: state.profilePage.friends
    }
}
const mapDispatchToProps = (dispatch) => {
    
    return {
        addMessage: () => {
            let action = changeProfileStatus()
            dispatch(action)
    
        },
        changeTextArea: (text) => {
        
            let action = updateProfileChangeStatusTextArea(text)
            dispatch(action)
        }
    }
}

const ProfileCardContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileCard)

export default ProfileCardContainer;