import c from "./Dialogs.module.css"
import DialogsSideBar from "./DialogsSideBar/DialogsSideBar"
import SendADialog from "./SendADialog/SendADialog"

const DialogItem = function (props) {
    debugger
    let friendsList = props.dialogs.map((el) => {
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
    
    return (
        
        <div>
            <div className={c.dialogWindow}>
                <div className={c.messages}>
                    <DialogItem dialogs = {props.store.state.dialogPage.dialogMessages}/>
                </div>
                <SendADialog store={props.store}></SendADialog>

            </div>
            <div className={c.dialogSideBar}>
                <DialogsSideBar asideContacts={props.store.state.dialogPage.dialogsArray}></DialogsSideBar>
            </div>
        </div>

    )
}

export default Dialogs;