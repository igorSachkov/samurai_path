import { connect } from "react-redux"
import { setStyle } from "./../../../redux/settingsReducer"
import { Field, reduxForm } from "redux-form"
import c from "./Settings.module.css"
const ThemeSettings = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <Field name="setStyle" component="select">
                    <option disabled>Выберите тему</option>
                    <option value="lightTheme">Светлая тема</option>
                    <option value="darkTheme">Темная тема</option>
                    <option value="blueTheme">Голубая тема</option>
                    <option value="greenTheme">Зеленая тема</option>
                </Field>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}


const ThemeSettingsForm = reduxForm({
    form: `settings`
})(ThemeSettings)


const Settings = (props) => {

    const changeStyle = (style) => {
        props.setStyle(style.setStyle)

        console.log(style)
    }
    return (
        <div>
            <ThemeSettingsForm backgroundColor={props.backgroundColor} onSubmit={changeStyle} />
        </div>

    )
}

const mapStateToProps = (state) => {
    return {
        theme: state.settings.theme,
    }
}

export default connect(mapStateToProps, { setStyle })(Settings);