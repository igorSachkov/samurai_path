import { createStore, combineReducers } from "redux";
import {profileReducer} from "./profileReducer"
import {dialogReducer} from "./dialogReducer"
import {usersReducer} from "./usersReducer"
import { authReducer } from "./authReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    usersPage: usersReducer,
    auth: authReducer
})


let store = createStore(reducers)
window.state = store

export default store;