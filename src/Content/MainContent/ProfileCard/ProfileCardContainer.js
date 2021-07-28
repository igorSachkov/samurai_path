
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { changeProfileStatus, updateProfileChangeStatusTextArea, getUserProfileThunk, getProfileStatusThunk, updateProfileStatusThunk } from "../../../redux/profileReducer"
import React from "react"
import ProfileCard from "./ProfileCard"
import withAuthRedirect from "../../../HOC/withAuthRedirect";
import { compose } from "redux";

class ProfileClass extends React.Component {

    constructor(props) {
        super(props)
    }
    componentDidMount() {

        let userId = this.props.match.params.userId
        if (!userId) userId = this.props.userId
        this.props.getUserProfileThunk(userId)
        this.props.getProfileStatusThunk(userId)
    }
    render() {
        return (
                <ProfileCard {...this.props} profileId={this.props.match.params.userId} />
        )
    }
}
const mapStateToProps = (state) => {

    return {
        status: state.profilePage.status,
        mainProfile: state.profilePage.mainProfile,
        friends: state.profilePage.friends,
        isFetching: state.profilePage.isFetching,
        profile: state.profilePage.profile,
        userId: state.auth.id
    }
}

export default compose(
    connect(mapStateToProps, {
        changeProfileStatus, updateProfileChangeStatusTextArea, getUserProfileThunk, getProfileStatusThunk, updateProfileStatusThunk
    }),
    withAuthRedirect,
    withRouter
)(ProfileClass)