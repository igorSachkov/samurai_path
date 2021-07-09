import c from "./Dialogs.module.css"
import DialogsSideBar from "./DialogsSideBar/DialogsSideBar"
import DialogProfiles from "./DialogsSideBar/DialogProfiles/DialogProfiles"

const Dialog = (props) => {
    return (
        <div>{props.message}</div>
    )
}







const Dialogs = function (props) {
    // debugger
    return (
        <div>
            <div className={c.dialogWindow}>
                <div className={c.messages}>
                    <Dialog message="Hello" />
                    <Dialog message="How are you?" />
                    <Dialog message="Beiil" />
                </div>

            </div>
            <div className={c.dialogSideBar}>
                <DialogsSideBar asideContacts={props.asideContacts}></DialogsSideBar>
            </div>
        </div>

    )
}

export default Dialogs;