import Users from "./Users"
import { connect } from "react-redux";
import {followActionCreator, unfollowActionCreator, setUsersActionCreator} from "../../redux/usersReducer"

let mapStateToProps = (state) => {
    
    return {
        users: state.usersPage.users
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
        }
    }
}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;