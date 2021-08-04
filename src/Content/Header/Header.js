import Logo from "./Logo/Logo"
import MenuArea from "./MenuArea/MenuArea"
import c from "./Header.module.css"
const Header = (props)=> {
    
    return (
        <div className={c.container} style={{backgroundColor: props.backgroundColor}}>
            <div className={c.header__wrapper}>
                <Logo></Logo>
                <MenuArea {...props}></MenuArea>
            </div>
        </div>
    )
}

export default Header;