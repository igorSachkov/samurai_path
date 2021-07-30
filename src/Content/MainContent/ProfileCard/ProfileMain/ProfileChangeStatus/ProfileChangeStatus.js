import React from "react"
import { Field, reduxForm } from "redux-form"
import {TextArea} from "./../../../../Common/FormControls"

const ProfileChangeStatus = (props) => {
 
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field 
                name={`profileStatus`} component={TextArea} 
                autoFocus={true} placeholder={props.status} 
                />
            </div>
            <div>
                <button>Изменить статус</button>
            </div>
        </form>
    )
}

const changeStatusForm = reduxForm({
    form: "profileStatus"
})(ProfileChangeStatus)


export default changeStatusForm