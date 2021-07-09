import c from "./DialogsSideBar.module.css"
import DialogProfiles from "./DialogProfiles/DialogProfiles"









const DialogsSideBar = function (props) {

    let dialogsArrayOut = props.asideContacts.map( (el)=> {
        return (<DialogProfiles id={el.id} avatar ={el.avatar} name={el.name} status={el.status}  />)
      })

    return (
        <div className={c.container}>
            <div className={c.contacts__container}>
                <div>Контакты</div>
                <div className={c.contacts__items}>
                    {dialogsArrayOut}   
                </div>

            </div>

        </div>

    )
}

export default DialogsSideBar;