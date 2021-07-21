import UsersClass from "./UsersClass"
import { connect } from "react-redux";
import {follow, unfollow, setUsers, setPage, setTotalUsersCount, setIsFetching, toggleFollowUnfollow, getUsersThunkCreator} from "../../redux/usersReducer"

let mapStateToProps = (state) => {
    
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        toggleIsFollowing: state.usersPage.toggleIsFollowing
    }
}

const UsersContainer = connect(mapStateToProps, {
    follow, unfollow, setUsers, setPage, setTotalUsersCount, setIsFetching, toggleFollowUnfollow, getUsersThunkCreator
})(UsersClass)

export default UsersContainer;