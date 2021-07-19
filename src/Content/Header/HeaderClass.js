import React from "react"
import Header from "./Header"
import axios from "axios"
import { connect } from "react-redux"
import {setUserData} from "./../../redux/authReducer"
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
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,
        {withCredentials: true})
        .then(response => {
            if(response.data.resultCode === 0) {
                this.props.setUserData(response.data.data)
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