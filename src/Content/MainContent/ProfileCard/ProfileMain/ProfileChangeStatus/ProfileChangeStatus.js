import React from "react"
import {changeProfileStatus, updateProfileChangeStatusTextArea} from "../../../../../redux/profileReducer"

const ProfileChangeStatus = (props) => {
    
    let changeProfileStatusTextArea = React.createRef()

    let addMessage = () => {
        
        let action = changeProfileStatus()
        props.dispatch(action)

    }
    let changeTextArea = () => {
        
        let action = updateProfileChangeStatusTextArea(changeProfileStatusTextArea.current.value)
        props.dispatch(action)
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