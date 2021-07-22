import React from "react"
import { connect } from "react-redux"
import { Redirect } from "react-router"

const mapStateToProps = (state) => {
    return { isAuth: state.auth.isAuth }
}



let withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {

        render() {

            if (!this.props.isAuth) {
                return <Redirect to={"/login"} />
            }
            return < Component {...this.props} />
        }
    }
    let ConnectedWithAuthRedirect = connect(mapStateToProps)(RedirectComponent)

    return ConnectedWithAuthRedirect
}



export default withAuthRedirect
