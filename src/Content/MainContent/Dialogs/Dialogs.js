import c from "./Dialogs.module.css"
import DialogsSideBar from "./DialogsSideBar/DialogsSideBar"
import SendADialog from "./SendADialog/SendADialog"
import DialogItem from "./DialogItem/DialogItem"
import PropTypes from 'prop-types'



const Dialogs = function (props) {

    const logColor = (title, color)=> {
        console.log(`New Color: ${title} | ${color}`)
    }

    return (

        <div>
            <div className={c.dialogWindow}>
                <div className={c.messages}>
                    <DialogItem dialogs={props.dialogs} />
                </div>
                <SendADialog updateDialogTextArea={props.updateDialogTextArea} addDialogMessage={props.addDialogMessage} dialogTextArea={props.dialogTextArea}></SendADialog>

            </div>
            <div className={c.dialogSideBar}>
                <DialogsSideBar asideContacts={props.asideContacts}></DialogsSideBar>
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