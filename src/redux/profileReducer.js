import { profileApi } from "./../api/api"
import { constants } from "./constants"


////убрать mainProfile
let initialStore = {
    status: "",
    mainProfile: {
        avatar: "https://image.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg",
        background: "https://image.freepik.com/free-vector/misty-landscape-with-fog-pine-forest-mountain-slopes-illustration-nature-scene_1150-37301.jpg",
        posts: [{ id: 1, name: "Kristina", post: "So big, wow." }, { id: 2, name: "Boris", post: "King of all mans" }],
    },
    friends: [
        { id: "1", avatar: "https://image.freepik.com/free-photo/handsome-young-man-pink-shirt-isolated-blue-wall-laughing_1368-55070.jpg", name: "Кирилл", status: "online" },
        { id: "2", avatar: "https://image.freepik.com/free-photo/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction_176420-15187.jpg", name: "Анастасия", status: "online" },
        { id: "3", avatar: "https://image.freepik.com/free-photo/airplane-russian-pilot-isolated-white-background-having-doubts-thinking_1368-213719.jpg", name: "Филипп", status: "offline" },
        { id: "4", avatar: "https://image.freepik.com/free-photo/african-american-handsome-man-isolated-pink-background-shouting-through-megaphone-pointing-side_1368-213685.jpg", name: "Григорий", status: "online" },
        { id: "5", avatar: "https://image.freepik.com/free-photo/handsome-freelancer-man-holding-laptop-smiling-standing-happy-light-turquoise-wall_1258-23916.jpg", name: "Артем", status: "online" }
    ],
    profile: null
}


export const profileReducer = (state = initialStore, action) => {
    switch (action.type) {

        case constants.profileReducer.SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case constants.profileReducer.GET_PROFILE_STATUS:
            return {
                ...state,
                status: action.status
            }
        default:
            return state;
    }
}

const setUserProfile = (profile) => ({ type: constants.profileReducer.SET_USER_PROFILE, profile })
const getProfileStatusAC = (status) => ({ type: constants.profileReducer.GET_PROFILE_STATUS, status })

export const getUserProfileThunk = (userId) => {
    return (dispatch) => {
        profileApi.getUser(userId)
            .then(response => {
                dispatch(setUserProfile(response.data))
            })
    }
}
export const getProfileStatusThunk = (userId) => {
    return (dispatch) => {
        profileApi.getStatus(userId)
            .then(status => {
                dispatch(getProfileStatusAC(status.data))
            })
    }
}
export const updateProfileStatusThunk = (status) => {
    return (dispatch) => {
        profileApi.updateStatus(status)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(getProfileStatusAC(status))
                }
            })
    }
}