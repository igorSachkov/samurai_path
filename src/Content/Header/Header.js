import Logo from "./Logo/Logo"
import c from "./Header.module.css"
const Header = function() {
    return (
        <div className={c.container}>
            <div className="header-wrapper">
                <Logo></Logo>
                {/* <MenuArea></MenuArea> */}
            </div>
        </div>
    )
}

export default Header;