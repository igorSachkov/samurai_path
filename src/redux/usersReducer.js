import { userApi } from "./../api/api"
import { constants } from "./constants"


let initialStore = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    toggleIsFollowing: []

}


export const usersReducer = (state = initialStore, action) => {

    switch (action.type) {
        case constants.usersReducer.FOLLOW:
            return {
                ...state,
                users: state.users.map(e => {
                    if (e.id === action.userId) {
                        return {
                            ...e,
                            followed: true
                        }
                    }
                    return e
                })
            }
        case constants.usersReducer.UNFOLLOW:
            return {
                ...state,
                users: state.users.map(e => {
                    if (e.id === action.userId) {
                        return {
                            ...e,
                            followed: false
                        }
                    }
                    return e
                })
            }
        case constants.usersReducer.SET_USERS:
            return {
                ...state,
                users: [...action.users]
            }
        case constants.usersReducer.SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.page
            }
        case constants.usersReducer.SET_TOTAL_USERS_COUNT:

            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
        case constants.usersReducer.SET_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case constants.usersReducer.TOGGLE_FOLLOW_UNFOLLOW:
            return {
                ...state,
                toggleIsFollowing: action.isFetching
                    ? [...state.toggleIsFollowing, action.userId]
                    : state.toggleIsFollowing.filter(id => id != action.userId)
            }
        default:
            return state
    }
}
export const follow = (value) => ({ type: constants.usersReducer.FOLLOW, userId: value })
export const unfollow = (value) => ({ type: constants.usersReducer.UNFOLLOW, userId: value })
export const setUsers = (values) => ({ type: constants.usersReducer.SET_USERS, users: values })
export const setPage = (value) => ({ type: constants.usersReducer.SET_CURRENT_PAGE, page: value })
export const setTotalUsersCount = (value) => ({ type: constants.usersReducer.SET_TOTAL_USERS_COUNT, totalUsersCount: value })
export const setIsFetching = (isFetching) => ({ type: constants.usersReducer.SET_IS_FETCHING, isFetching })
export const toggleFollowUnfollow = (isFetching, userId) => ({ type: constants.usersReducer.TOGGLE_FOLLOW_UNFOLLOW, isFetching, userId })

export const getUsersThunkCreator = (currentPage, pageSize) => {
    return async (dispatch) => {

        dispatch(setIsFetching(true))
        let data = await userApi.getUsers(currentPage, pageSize)
                dispatch(setIsFetching(false))
                dispatch(setUsers(data.items))
                dispatch(setTotalUsersCount(data.totalCount))
    }
}

export const followThunk = (userId) => {
    return async (dispatch) => {
        dispatch(toggleFollowUnfollow(true, userId))
        let response = await userApi.follow(userId)
                if (response.data.resultCode === 0) {
                    dispatch(follow(userId))
                }
                dispatch(toggleFollowUnfollow(false, userId))
            
    }
}
export const unfollowThunk = (userId) => {
    return async (dispatch) => {
        dispatch(toggleFollowUnfollow(true, userId))
        let response = await userApi.unfollow(userId)
                if (response.data.resultCode === 0) {
                    dispatch(unfollow(userId))
                }
                dispatch(toggleFollowUnfollow(false, userId))
    }
}