import { createStore, combineReducers, applyMiddleware } from "redux";
import {profileReducer} from "./profileReducer"
import {dialogReducer} from "./dialogReducer"
import {usersReducer} from "./usersReducer"
import { authReducer } from "./authReducer";
import thunkMiddleware from "redux-thunk"
import { reducer as formReducer} from "redux-form"
import {appReducer} from "./appReducer"



const reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer,
})



let store = createStore(reducers, applyMiddleware(thunkMiddleware))
window.state = store

export default store;