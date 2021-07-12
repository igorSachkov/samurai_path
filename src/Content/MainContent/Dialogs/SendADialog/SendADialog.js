import React from "react"


const SendADialog = (props) => {
    let newPostElement = React.createRef()

    let addMessage = () => {
        let action = {type: "ADD-DIALOG_MESSAGE"}
        props.store.dispatch(action)

    }
    let changeTextArea = () => {
        let action = {type: "UPDATE-DIALOG-TEXT-AREA", text: newPostElement.current.value}
        props.store.dispatch(action)
    }
    return (
        <div>
            <div>
                <textarea ref={newPostElement} value={props.store.state.dialogPage.dialogTextArea} onChange={changeTextArea} />
            </div>
            <div>
                <button onClick={addMessage}>Отправить</button>
            </div>
        </div>
    )
}


export default SendADialog