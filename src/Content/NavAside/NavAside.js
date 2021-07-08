import c from "./NavAside.module.css"
import NavSite from "./NavSite/NavSite";


const NavAside = function() {
    return (
        <div className={c.aside__container}>
            <NavSite></NavSite>
        </div>
    )
}

export default NavAside;