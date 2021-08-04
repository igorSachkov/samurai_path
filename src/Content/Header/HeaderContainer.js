import React from "react"
import Header from "./Header"
import { connect } from "react-redux"
import { logoutThunk } from "../../redux/authReducer"
const HeaderContainer = (props) => {

    return (
        <Header {...props} />
    )
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    email: state.auth.email,
    userId: state.auth.id,
    state: state,
    theme: state.settings.theme
})


export default connect(mapStateToProps, {
    logoutThunk
})(HeaderContainer)