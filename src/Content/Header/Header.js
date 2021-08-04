import Logo from "./Logo/Logo"
import MenuArea from "./MenuArea/MenuArea"
import style1 from "./Header.module.css"
import style2 from "./../Common/ThemeStyle.module.css"
const Header = (props)=> {
    const stylesMap = {
        style1,
        style2
    }
    return (
        <div className={`${stylesMap.style1.container} ${stylesMap.style2[props.theme]}`}>
            <div className={style1.header__wrapper}>
                <Logo></Logo>
                <MenuArea {...props}></MenuArea>
            </div>
        </div>
    )
}

export default Header;