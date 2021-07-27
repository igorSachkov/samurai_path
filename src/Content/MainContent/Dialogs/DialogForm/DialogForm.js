import React from "react"
import {Field, reduxForm} from "redux-form"


const SendADialog = (props) => {
    
 
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={`message`} component="textarea" placeholder={"you message..."} />
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