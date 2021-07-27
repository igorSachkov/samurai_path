import c from "./Dialogs.module.css"
import DialogsSideBar from "./DialogsSideBar/DialogsSideBar"
import DialogForm from "./DialogForm/DialogForm"
import DialogItem from "./DialogItem/DialogItem"
import PropTypes from 'prop-types'



const Dialogs = function (props) {
    const addMessage = (object) => {
        props.addDialogMessage(object.message)
        console.log(object);
    }
    return (

        <div>
            <div className={c.dialogWindow}>
                <div className={c.messages}>
                    <DialogItem dialogs={props.dialogs} />
                </div>
                <DialogForm onSubmit={addMessage}/>

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