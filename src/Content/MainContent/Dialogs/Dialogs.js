import c from "./Dialogs.module.css"
import DialogsSideBar from "./DialogsSideBar/DialogsSideBar"
import SendADialog from "./SendADialog/SendADialog"
import DialogItem from "./DialogItem/DialogItem"






const Dialogs = function (props) {
    
    return (

        <div>
            <div className={c.dialogWindow}>
                <div className={c.messages}>
                    <DialogItem dialogs={props.dialogs} />
                </div>
                <SendADialog dialogTextArea={props.dialogTextArea} dispatch={props.dispatch}></SendADialog>

            </div>
            <div className={c.dialogSideBar}>
                <DialogsSideBar asideContacts={props.asideContacts}></DialogsSideBar>
            </div>
        </div>

    )
}

export default Dialogs;