import React from "react"
import { Field, reduxForm } from "redux-form"
import { required, maxLengthCreator } from "./../../../../validators/validators"
import { TextArea } from "../../../Common/FormControls"

const maxLength15 = maxLengthCreator(15)
const SendADialog = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={`message`} component={TextArea} placeholder={"your message..."} validate={[required, maxLength15]} />
            </div>
            <div>
                <button>Send Message</button>
            </div>
        </form>
    )
}

const DialogForm = reduxForm({
    form: `messages`
})(SendADialog)

export default DialogForm