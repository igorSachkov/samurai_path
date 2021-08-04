import c from "./DialogProfile.module.css"
import { NavLink } from "react-router-dom";

const DialogProfiles = (props) => {
    return (
        <NavLink to={`/dialogs/${props.id}`} className={c.item}>
            <div className={c.avatar}><img className={c.item__avatar} src={props.avatar} alt="avatar"></img> </div>
            <div className={c.item__name}>{props.name}</div>
            <div className={c.item__status}>{props.status}</div>
        </NavLink>
    )
}

export default DialogProfiles;