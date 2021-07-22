
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { changeProfileStatus, updateProfileChangeStatusTextArea, getUserProfileThunk } from "../../../redux/profileReducer"
import React from "react"
import ProfileCard from "./ProfileCard"
import  withAuthRedirect  from "../../../HOC/withAuthRedirect";
import { compose } from "redux";

class ProfileClass extends React.Component {

    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.props.getUserProfileThunk(this.props.match.params.userId)
    }
    render() {
        return (
            <ProfileCard {...this.props} />
        )
    }
}


const mapStateToProps = (state) => {
    return {
        mainProfile: state.profilePage.mainProfile,
        friends: state.profilePage.friends,
        isFetching: state.profilePage.isFetching,
        profile: state.profilePage.profile
    }
}

export default compose(
    connect(mapStateToProps, {
        changeProfileStatus, updateProfileChangeStatusTextArea, getUserProfileThunk
    }),
    withAuthRedirect,
    withRouter
)(ProfileClass)