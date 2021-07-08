import EvgeniyAva from "../../../Images/EvgeniyAva.jpg"
import c from "./ProfileAvatar.module.css"


const ProfileAvatar = function () {
    return (
        <div className={c.wrapper__ava}>
            <img className={c.ava} src={EvgeniyAva} alt="avatar"></img>
        </div>


    )
}

export default ProfileAvatar