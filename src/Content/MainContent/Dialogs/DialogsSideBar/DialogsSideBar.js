import c from "./DialogsSideBar.module.css"
import DialogProfiles from "./DialogProfiles/DialogProfiles"









const DialogsSideBar = function () {




    let dialogsArray = [
        {id: "1", avatar:  "ava", name: "Кирилл", status: "online" },
        {id: "2", avatar:  "ava", name: "Анастасия", status: "online" },
        {id: "3", avatar:  "ava", name: "Филипп", status: "offline" },
        {id: "4", avatar:  "ava", name: "Григорий", status: "online" },
        {id: "5", avatar:  "ava", name: "Артем", status: "online" }
    ]
    
    let dialogsArrayOut = dialogsArray.map( (el)=> {
        return (<DialogProfiles id={el.id} avatar ={el.avatar} name={el.name} status={el.status}  />)
    })





    return (
        <div className={c.container}>
            <div className={c.contacts__container}>
                <div>Контакты</div>
                <div className={c.contacts__items}>
                    {/* <DialogProfiles id="1" avatar = "ava" name="Кирилл" status="online" />
                    <DialogProfiles id="2" avatar = "ava" name="Nastya" status="online" />
                    <DialogProfiles id="3" avatar = "ava" name="Oleg" status="offline" />
                    <DialogProfiles id="4" avatar = "ava" name="Valek" status="online" />
                    <DialogProfiles id="5" avatar = "ava" name="Artem" status="online" /> */}
                    {dialogsArrayOut}




                    
                </div>

            </div>

        </div>

    )
}

export default DialogsSideBar;