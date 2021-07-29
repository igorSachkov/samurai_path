import { stopSubmit } from "redux-form"
import { authApi } from "./../api/api"
import {getAuthUserDataThunk} from "./authReducer"

let initialStore = {
    initialized: false
}


export const appReducer = (state = initialStore, action) => {

    switch (action.type) {
        case "SET-INITIALIZED":

            return {
                ...state,
                initialized: true
            }

        default:
            return state
    }
}
export const initializedSuccess = () => ({ type: "SET-INITIALIZED"})

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserDataThunk())
    promise.then(()=> {
        dispatch(initializedSuccess())
    })
    
}
