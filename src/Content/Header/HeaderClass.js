import React from "react"
import Header from "./Header"
import { connect } from "react-redux"
import { getAuthUserDataThunk} from "./../../redux/authReducer"
import { logoutThunk } from "./../../redux/authReducer"
class HeaderClass extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Header {...this.props} />
        )
    }
    componentDidMount() {
        this.props.getAuthUserDataThunk()
    }
}
const mapStateToProps = (state)=> ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    email: state.auth.email,
    userId: state.auth.id
})


export default connect (mapStateToProps, {
    getAuthUserDataThunk, logoutThunk
}) (HeaderClass)