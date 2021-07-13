import Dialogs from "./Dialogs";






const DialogsContainer = function (props) {
    
    return (

        <Dialogs dialogs={props.store.getState().dialogReducer.dialogMessages} asideContacts={props.store.getState().dialogReducer.dialogsArray}
            dialogTextArea={props.store.getState().dialogReducer.dialogTextArea} dispatch={props.store.dispatch}
        />

    )
}

export default DialogsContainer;