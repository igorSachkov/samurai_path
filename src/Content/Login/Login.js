import {Field, reduxForm} from "redux-form"
import { connect } from "react-redux";
import { Input } from "../Common/FormControls";
import {required, maxLengthCreator} from "./../../validators/validators"
import { loginThunk } from "../../redux/authReducer";
import { Redirect } from "react-router-dom";


const LoginForm = (props) => {
    
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={`email`} component={Input} placeholder={"email"} validate={[required]}/>
            </div>
            <div>
                <Field name={`password`} component={Input} type={`password`} placeholder={"password"} validate={[required]}/>
            </div>
            <div>
                <Field name={`rememberMe`} component={Input} type={"checkbox"} /> remember me
            </div>
            <div>
                {props.error}
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
  })(LoginForm)


 const Login = (props) => {
    
    const onSubmit = (object) => {
        console.log(object.email, object.password, object.rememberMe)
        props.loginThunk(object.email, object.password, object.rememberMe)
    }

    if(props.isAuth) {
        return <Redirect to={"/profile"} />
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})
export const LoginAuth = connect(mapStateToProps, {loginThunk})(Login)