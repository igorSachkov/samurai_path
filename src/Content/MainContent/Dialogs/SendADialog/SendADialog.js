import React from "react"


const SendADialog = (props) => {
    let newPostElement = React.createRef()

    let addMessage = () => {
        
        let text = newPostElement.current.value
        props.addDialog(text)
        newPostElement.current.value = ""
        
    }
    return (
        <div>
            <div>
                <textarea ref={newPostElement}></textarea>
            </div>
            <div>
                <button onClick={addMessage}>Отправить</button>
            </div>
        </div>
    )
}


export default SendADialog