import { NavLink } from "react-router-dom"
import c from "./MenuArea.module.css"


const MenuArea = function(props) {
    
    return (
        <div className="menu__area">
            { props.isAuth ? <div><NavLink to={`/profile/${props.userId}`}>{props.login}</NavLink><button onClick={props.logoutThunk}>Logout</button></div>  : <NavLink to={"/login"} className={c.login}>Login</NavLink>}
           
        </div>
    )
}
export default MenuArea;