import React from "react"
import {changeProfileStatus, updateProfileChangeStatusTextArea} from "../../../../../redux/State"

const ProfileChangeStatus = (props) => {
    
    let changeProfileStatusTextArea = React.createRef()

    let addMessage = () => {
        let action = changeProfileStatus()
        props.store.dispatch(action)

    }
    let changeTextArea = () => {
        let action = updateProfileChangeStatusTextArea(changeProfileStatusTextArea.current.value)
        props.store.dispatch(action)
    }
    return (
        <div>
            <div>
                <textarea ref={changeProfileStatusTextArea} value={props.store._state.profilePage.mainProfile.profileChangeStatusTextArea} onChange={changeTextArea} />
            </div>
            <div>
                <button onClick={addMessage}>Изменить статус</button>
            </div>
        </div>
    )
}


export default ProfileChangeStatus