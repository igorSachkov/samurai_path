import React from "react"


const ProfileChangeStatus = (props) => {
    
    let changeProfileStatusTextArea = React.createRef()

    let addMessage = () => {
        props.changeProfileStatus()

    }
    let changeTextArea = () => {
        
        let text = changeProfileStatusTextArea.current.value
        props.updateProfileChangeStatusTextArea(text)
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