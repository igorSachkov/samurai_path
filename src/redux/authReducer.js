import { authApi } from "./../api/api"


let initialStore = {
    id: null,
    login: null,
    email: null,
    isAuth: false

}


export const authReducer = (state = initialStore, action) => {

    switch (action.type) {
        case "SET-USER-DATA":

            return {

                ...state,
                ...action.data,
                isAuth: true
            }

        default:
            return state
    }
}
export const setUserData = (data) => ({ type: "SET-USER-DATA", data })

export const getAuthUserDataThunk = () => {
    return (dispatch) => authApi.me()
        .then(data => {
            if (data.resultCode === 0) {
               dispatch(setUserData(data.data))
            }


        })
}