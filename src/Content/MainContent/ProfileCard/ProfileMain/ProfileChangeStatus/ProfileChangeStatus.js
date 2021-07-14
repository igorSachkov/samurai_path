import React from "react"
import {changeProfileStatus, updateProfileChangeStatusTextArea} from "../../../../../redux/profileReducer"

const ProfileChangeStatus = (props) => {
    
    let changeProfileStatusTextArea = React.createRef()

    let addMessage = () => {
        props.addMessage()

    }
    let changeTextArea = () => {
        
        let text = changeProfileStatusTextArea.current.value
        props.changeTextArea(text)
    }
    return (
        <div>
            <div>
                <textarea ref={changeProfileStatusTextArea} value={props.mainProfile.profileChangeStatusTextArea} onChange={changeTextArea} />
            </div>
            <div>
                <button onClick={addMessage}>Изменить статус</button>
            </div>
        </div>
    )
}


export default ProfileChangeStatus