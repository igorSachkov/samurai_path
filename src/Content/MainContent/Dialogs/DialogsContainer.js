import { connect } from "react-redux";
import Dialogs from "./Dialogs";
import { addDialogMessage, updateDialogTextArea } from "../../../redux/dialogReducer"

const mapStateToProps = (state) => {
    return {
        dialogs: state.dialogPage.dialogMessages,
        asideContacts: state.dialogPage.dialogsArray,
        dialogTextArea: state.dialogPage.dialogTextArea
    }
}

const DialogsContainer = connect(mapStateToProps, {addDialogMessage, updateDialogTextArea})(Dialogs)

export default DialogsContainer;