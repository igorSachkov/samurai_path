import ProfileCard from "./ProfileCard";
import { connect } from "react-redux";
import { changeProfileStatusActionCreator, updateProfileChangeStatusTextAreaActionCreator } from "../../../redux/profileReducer"


const mapStateToProps = (state) => {
    
    return {
        mainProfile: state.profilePage.mainProfile,
        friends: state.profilePage.friends
    }
}
const mapDispatchToProps = (dispatch) => {
    
    return {
        addMessage: () => {
            let action = changeProfileStatusActionCreator()
            dispatch(action)
    
        },
        changeTextArea: (text) => {
        
            let action = updateProfileChangeStatusTextAreaActionCreator(text)
            dispatch(action)
        }
    }
}

const ProfileCardContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileCard)

export default ProfileCardContainer;