import { connect } from "react-redux";
import Users from "./Users"
import React, { useState, useEffect } from "react"
import Preloader from "../Common/Preloader";
import { follow, unfollow, getUsersThunkCreator, setPage, followThunk, unfollowThunk } from "../../redux/usersReducer"
import withAuthRedirect from "../../HOC/withAuthRedirect";
import { compose } from "redux";


const UsersContainer = (props) => {

    useEffect(() => {
        if (props.users.length === 0) {
            props.getUsersThunkCreator(props.currentPage, props.pageSize)
        }
    });
    const changePage = (pageNumber) => {
        props.getUsersThunkCreator(pageNumber, props.pageSize)
        props.setPage(pageNumber)
    }
    return (
        <div> {props.isFetching && <Preloader />}
            <Users {...props} changePage={changePage} />
        </div>
    )
}

let mapStateToProps = (state) => {

    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        toggleIsFollowing: state.usersPage.toggleIsFollowing,
        portionSize: state.usersPage.portionSize
    }
}

export default compose(
    connect(mapStateToProps, {
        follow, unfollow, getUsersThunkCreator, setPage, followThunk, unfollowThunk
    }),
    withAuthRedirect
)(UsersContainer)