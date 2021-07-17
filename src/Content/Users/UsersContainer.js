import UsersClass from "./UsersClass"
import { connect } from "react-redux";
import {followActionCreator, unfollowActionCreator, setUsersActionCreator, setCurrentPageActionCreator, setTotalUsersCountActionCreator, setIsFetchingActionCreator} from "../../redux/usersReducer"

let mapStateToProps = (state) => {
    
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            let action = followActionCreator(userId)
            dispatch(action)
        },
        unfollow: (userId) => {
            let action = unfollowActionCreator(userId)
            dispatch(action)
        },
        setUsers: (users) => {
            let action = setUsersActionCreator(users)
            dispatch(action)
        },
        setPage: (page) => {
            let action = setCurrentPageActionCreator(page)
            dispatch(action)
        },
        setTotalUsersCount: (value)=> {
            let action = setTotalUsersCountActionCreator(value)
            dispatch(action)
        },
        setIsFetching: (isFetching) => {
            let action = setIsFetchingActionCreator(isFetching)
            dispatch(action)
        }
    }
}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClass)

export default UsersContainer;