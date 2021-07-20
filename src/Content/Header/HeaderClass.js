import React from "react"
import Header from "./Header"
import axios from "axios"
import { connect } from "react-redux"
import {setUserData} from "./../../redux/authReducer"
import { auth } from "../../api/api"
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
        auth()
        .then(data => {
            if(data.resultCode === 0) {
                this.props.setUserData(data.data)
            }

            
        })
    }
}
const mapStateToProps = (state)=> ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    email: state.auth.email,
    userId: state.auth.id
})


export default connect (mapStateToProps, {
    setUserData
}) (HeaderClass)