import c from "./DialogsSideBar.module.css"
import DialogProfiles from "./DialogProfiles/DialogProfiles"









const DialogsSideBar = function (props) {

    // debugger




    return (
        <div className={c.container}>
            <div className={c.contacts__container}>
                <div>Контакты</div>
                <div className={c.contacts__items}>
                    {props.asideContacts}   
                </div>

            </div>

        </div>

    )
}

export default DialogsSideBar;