import {Field, reduxForm} from "redux-form"


const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={`login`} component="input" placeholder={"login"} />
            </div>
            <div>
                <Field name={`password`} component="input" placeholder={"password"} />
            </div>
            <div>
                <Field name={`rememberMe`} component="input" type={"checkbox"} /> remember me
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

export const Login = () => {
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm />
        </div>
    )
}