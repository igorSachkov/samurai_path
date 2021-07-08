import c from "./Dialogs.module.css"
import DialogsSideBar from "./DialogsSideBar/DialogsSideBar"

const Dialog = (props) => {
    return (
        <div>{props.message}</div>
    )
}

const Dialogs = function () {
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
                <DialogsSideBar></DialogsSideBar>
            </div>
        </div>

    )
}

export default Dialogs;