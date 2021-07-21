import { createStore, combineReducers, applyMiddleware } from "redux";
import {profileReducer} from "./profileReducer"
import {dialogReducer} from "./dialogReducer"
import {usersReducer} from "./usersReducer"
import { authReducer } from "./authReducer";
import thunkMiddleware from "redux-thunk"

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    usersPage: usersReducer,
    auth: authReducer
})


let store = createStore(reducers, applyMiddleware(thunkMiddleware))
window.state = store

export default store;