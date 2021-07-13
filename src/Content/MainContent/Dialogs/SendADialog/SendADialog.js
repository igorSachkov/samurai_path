import React from "react"
import {addDialogMessageActionCreator, updateDialogTextAreaActionCreator} from "../../../../redux/dialogReducer"

const SendADialog = (props) => {
    
    let newPostElement = React.createRef()

    let addMessage = () => {
        let action = addDialogMessageActionCreator()
        props.store.dispatch(action)

    }
    let changeTextArea = () => {
        let action = updateDialogTextAreaActionCreator(newPostElement.current.value)
        props.store.dispatch(action)
    }
    return (
        <div>
            <div>
                <textarea ref={newPostElement} value={props.store.getState().dialogReducer.dialogTextArea} onChange={changeTextArea} />
            </div>
            <div>
                <button onClick={addMessage}>Отправить</button>
            </div>
        </div>
    )
}


export default SendADialog