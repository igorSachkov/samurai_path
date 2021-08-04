
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getUserProfileThunk, getProfileStatusThunk, updateProfileStatusThunk } from "../../../redux/profileReducer"
import React, { useState, useEffect } from "react"
import ProfileCard from "./ProfileCard"
import withAuthRedirect from "../../../HOC/withAuthRedirect";
import { compose } from "redux";

const ProfileClass = (props) => {
    
    useEffect(() => {
        
        let userId = props.match.params.userId
        if (!userId) userId = props.userId
        props.getUserProfileThunk(userId)
        props.getProfileStatusThunk(userId)
    })

    return (
        <ProfileCard {...props} profileId={props.match.params.userId} />
    )
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
        getUserProfileThunk, getProfileStatusThunk, updateProfileStatusThunk
    }),
    withAuthRedirect,
    withRouter
)(ProfileClass)