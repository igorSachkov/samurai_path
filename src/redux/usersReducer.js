let initialStore = {
    users: [
        // { id: 1, fullName: "Kostya", status: "Лев сильнее волка, но волк в цирке не выступает", location: { city: "Volgograd", country: "Russia" }, followed: true },
        // { id: 2, fullName: "Svirepy", status: "Настоящий мужик должен", location: { city: "St. Petersburg", country: "Russia" }, followed: false },
        // { id: 3, fullName: "Masha", status: "oh my", location: { city: "Kiev", country: "Ukraine" }, followed: true },
        // { id: 4, fullName: "Karl", status: "cool", location: { city: "Berlin", country: "Germany" }, followed: false },
    ]

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
                users:  [...state.users, ...action.users]
            }
        default:
            return state
    }
}
export const followActionCreator = (value) => ({ type: "FOLLOW", userId: value })
export const unfollowActionCreator = (value) => ({ type: "UNFOLLOW", userId: value })
export const setUsersActionCreator = (values) => ({ type: "SET-USERS", users: values })