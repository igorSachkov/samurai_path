import React from "react"
const ProfileChangeStatus = (props) => {

    let changeProfileStatusTextArea = React.createRef()

    let changeStatus = () => {
        let text = changeProfileStatusTextArea.current.value
        props.updateProfileStatusThunk(text)
        props.deactivateModeChange()

    }
    let changeTextArea = (e) => {
        props.changeTextArea(e.currentTarget.value)

    }

    return (
        <div>
            <div>
                <textarea autoFocus={true} placeholder={props.status} ref={changeProfileStatusTextArea}  onChange={changeTextArea} />
            </div>
            <div>
                <button onClick={() => changeStatus()}>Изменить статус</button>
            </div>
        </div>
    )
}


export default ProfileChangeStatus