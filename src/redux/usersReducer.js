import { userApi } from "./../api/api"



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
        case "FOLLOW":
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
        case "UNFOLLOW":
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
        case "SET-USERS":
            return {
                ...state,
                users: [...action.users]
            }
        case "SET-CURRENT-PAGE":
            return {
                ...state,
                currentPage: action.page
            }
        case "SET-TOTAL-USERS-COUNT":
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
        case "SET-IS-FETCHING":
            return {
                ...state,
                isFetching: action.isFetching
            }
        case "TOGGLE-FOLLOW-UNFOLLOW":
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
export const follow = (value) => ({ type: "FOLLOW", userId: value })
export const unfollow = (value) => ({ type: "UNFOLLOW", userId: value })
export const setUsers = (values) => ({ type: "SET-USERS", users: values })
export const setPage = (value) => ({ type: "SET-CURRENT-PAGE", page: value })
export const setTotalUsersCount = (value) => ({ type: "SET-TOTAL-USERS-COUNT", totalUsersCount: value })
export const setIsFetching = (isFetching) => ({ type: "SET-IS-FETCHING", isFetching })
export const toggleFollowUnfollow = (isFetching, userId) => ({ type: "TOGGLE-FOLLOW-UNFOLLOW", isFetching, userId })

export const getUsersThunkCreator = (currentPage, pageSize) => {
    return (dispatch) => {

        dispatch(setIsFetching(true))
        userApi.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(setIsFetching(false))
                dispatch(setUsers(data.items))
                dispatch(setTotalUsersCount(data.totalCount))
            })
    }
}

export const followThunk = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowUnfollow(true, userId))
        userApi.follow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(follow(userId))
                    
                }
                dispatch(toggleFollowUnfollow(false, userId))
            })
    }
}
export const unfollowThunk = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowUnfollow(true, userId))
        userApi.unfollow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(unfollow(userId))
                }
                dispatch(toggleFollowUnfollow(false, userId))
            })
    }
}