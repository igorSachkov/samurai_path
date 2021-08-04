import c from "./Dialogs.module.css"
import DialogSideBar from "./DialogSideBar/DialogSideBar"
import DialogForm from "./DialogForm/DialogForm"
import DialogItem from "./DialogItem/DialogItem"
import PropTypes from 'prop-types'



const Dialogs = (props) => {
    const addMessage = (object) => {
        props.addDialogMessage(object.message)
    }
    return (

        <div>
            <div className={c.dialogWindow}>
                <div className={c.messages}>
                    <DialogItem dialogs={props.dialogs} />
                </div>
                <DialogForm onSubmit={addMessage} />
            </div>
            <div className={c.dialogSideBar}>
                <DialogSideBar asideContacts={props.asideContacts}></DialogSideBar>
            </div>
        </div>

    )
}
Dialogs.propTypes = {
    dialogs: PropTypes.array
}
Dialogs.defaultProps = {
    dialogs: []
}
export default Dialogs;