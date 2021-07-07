import EvgeniyAva from "../../../Images/EvgeniyAva.jpg"
import c from "./ProfileAvatar.module.css"


const ProfileAvatar = function() {
    return (
        <figure>
            <img className={c.ava} src={EvgeniyAva} alt="avatar"></img>
        </figure>
    )
}

export default ProfileAvatar