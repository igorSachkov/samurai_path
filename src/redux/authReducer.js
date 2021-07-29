import { stopSubmit } from "redux-form"
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
                isAuth: action.isAuth
            }

        default:
            return state
    }
}
export const setUserData = (data, isAuth) => ({ type: "SET-USER-DATA", data, isAuth })

export const getAuthUserDataThunk = () => (dispatch) => {
    return authApi.me()
        .then(response => {
            
            if (response.resultCode === 0) {
                dispatch(setUserData(response.data, true))
            }
        })

}

export const loginThunk = (email, password, rememberMe) => {
    return (dispatch) => authApi.login(email, password, rememberMe)
        .then(data => {
                
            if (data.data.resultCode === 0) {
                dispatch(getAuthUserDataThunk())
            } else {
                let message = data.data.messages.length > 0 ? data.data.messages[0] : "Some error"
                dispatch(stopSubmit("login", { _error: message }))
            }
        })
}
export const logoutThunk = () => {
    return (dispatch) => authApi.logout()
        .then(data => {
            if (data.data.resultCode === 0) {
                dispatch(setUserData({ id: null, login: null, email: null }, false))
            }
        })
}
