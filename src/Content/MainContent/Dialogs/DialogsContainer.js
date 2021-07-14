import { connect } from "react-redux";
import Dialogs from "./Dialogs";
import { addDialogMessageActionCreator, updateDialogTextAreaActionCreator } from "../../../redux/dialogReducer"

const mapStateToProps = (state) => {
    return {
        dialogs: state.dialogPage.dialogMessages,
        asideContacts: state.dialogPage.dialogsArray,
        dialogTextArea: state.dialogPage.dialogTextArea
    }
}
const mapDispatchToProps = (dispatch) => {
    
    return {
        addMessage: () => {
            let action = addDialogMessageActionCreator()
            dispatch(action)
        },
        changeTextArea: (text) => {
            let action = updateDialogTextAreaActionCreator(text)
            dispatch(action)
        }
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;