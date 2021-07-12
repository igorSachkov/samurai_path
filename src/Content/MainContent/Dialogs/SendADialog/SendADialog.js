import React from "react"


const SendADialog = (props) => {
    let newPostElement = React.createRef()

    let addMessage = () => {

        props.store.addDialogMessage()

    }
    let changeTextArea = () => {
        let text = newPostElement.current.value
        props.store.updateDialogTextArea(text)
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