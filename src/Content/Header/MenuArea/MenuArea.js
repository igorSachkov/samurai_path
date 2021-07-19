import { NavLink } from "react-router-dom"
import c from "./MenuArea.module.css"

const MenuArea = function(props) {
    debugger
    return (
        <div className="menu__area">
            { props.isAuth ? <NavLink to={`/profile/${props.userId}`}>{props.login}</NavLink> : <NavLink to={"/login"} className={c.login}>Login</NavLink>}
           
        </div>
    )
}
export default MenuArea;