import c from "./NavSite.module.css"
import { NavLink } from "react-router-dom";

const NavSite = function() {
    return (
        <ul>
            <li>
                <NavLink to="/profile" className={c.nav__item} activeClassName={c.active}>Профиль</NavLink>
            </li>
            <li>
                <NavLink to="/dialogs" className={c.nav__item} activeClassName={c.active}>Диалоги</NavLink>
            </li>
            <li>
                <NavLink to="/news" className={c.nav__item} activeClassName={c.active}>Новости</NavLink>
            </li>
            <li>
                <NavLink to="/music" className={c.nav__item} activeClassName={c.active}>Музыка</NavLink>
            </li>
            <li>
                <NavLink to="/settings" className={c.nav__item} activeClassName={c.active}>Настройки</NavLink>
            </li>
        </ul>
        
    )
}

export default NavSite;