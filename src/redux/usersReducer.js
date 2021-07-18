let initialStore = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false

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
