import React from "react"


const SendADialog = (props) => {
    let newPostElement = React.createRef()

    let addMessage = () => {
        
        props.addDialog()
        
    }
    let changeTextArea = ()=> {
        let text = newPostElement.current.value
        props.updateDialogTextArea(text)
    }
    return (
        <div>
            <div>
                <textarea ref={newPostElement} value={props.textArea} onChange={changeTextArea}/>
            </div>
            <div>
                <button onClick={addMessage}>Отправить</button>
            </div>
        </div>
    )
}


export default SendADialog