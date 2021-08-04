import {getAuthUserDataThunk} from "./authReducer"
import { constants } from "./constants"

let initialStore = {
    initialized: false
}

export const appReducer = (state = initialStore, action) => {

    switch (action.type) {
        case constants.appReducer.SET_INITIALIZED:

            return {
                ...state,
                initialized: true
            }

        default:
            return state
    }
}
export const initializedSuccess = () => ({ type: constants.appReducer.SET_INITIALIZED})

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserDataThunk())
    promise.then(()=> {
        dispatch(initializedSuccess())
    })
    
}
