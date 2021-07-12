import c from "./Dialogs.module.css"
import DialogsSideBar from "./DialogsSideBar/DialogsSideBar"
import SendADialog from "./SendADialog/SendADialog"

const DialogItem = function (props) {
    let friendsList = props.state.map((el) => {
        return (
            
            <div key={el.id}>
                <div>{el.author}</div>
                <div>{el.message}</div>
            </div>

        )
    })

    return (
        <div>{friendsList}</div>

    )
}







const Dialogs = function (props) {
    // debugger
    return (
        <div>
            <div className={c.dialogWindow}>
                <div className={c.messages}>
                    <DialogItem state = {props.state.dialogMessages}/>
                </div>
                <SendADialog addDialog={props.addDialog}></SendADialog>

            </div>
            <div className={c.dialogSideBar}>
                <DialogsSideBar asideContacts={props.state.dialogsArray}></DialogsSideBar>
            </div>
        </div>

    )
}

export default Dialogs;