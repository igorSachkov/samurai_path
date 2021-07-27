import { connect } from "react-redux";
import Dialogs from "./Dialogs";
import { addDialogMessage } from "../../../redux/dialogReducer"
import  withAuthRedirect  from "../../../HOC/withAuthRedirect";
import { compose } from "redux";

const mapStateToProps = (state) => {
    return {
        dialogs: state.dialogPage.dialogMessages,
        asideContacts: state.dialogPage.dialogsArray,
        dialogTextArea: state.dialogPage.dialogTextArea
    }
}

export default compose(
    connect(mapStateToProps, {addDialogMessage}),
    withAuthRedirect
)(Dialogs)