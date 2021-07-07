import Logo from "./Logo/Logo"
import MenuArea from "./MenuArea/MenuArea"
import c from "./Header.module.css"
const Header = function() {
    return (
        <div className={c.container}>
            <div className={c.header__wrapper}>
                <Logo></Logo>
                <MenuArea></MenuArea>
            </div>
        </div>
    )
}

export default Header;