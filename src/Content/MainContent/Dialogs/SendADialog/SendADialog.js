import React from "react"

const SendADialog = (props) => {
    
    let newPostElement = React.createRef()

    
    
    let onAddMessage = () => {
        
        props.addMessage()

    }
    let onChangeTextArea = () => {
        let text = newPostElement.current.value
        props.changeTextArea(text)
    }
    return (
        <div>
            <div>
                <textarea ref={newPostElement} value={props.dialogTextArea} onChange={onChangeTextArea} />
            </div>
            <div>
                <button onClick={onAddMessage}>Отправить</button>
            </div>
        </div>
    )
}


export default SendADialog