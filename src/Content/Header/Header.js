import Logo from "./Logo/Logo"
import MenuArea from "./MenuArea/MenuArea"
import style1 from "./Header.module.css"
import style2 from "./../Common/ThemeStyle.module.css"
import { IconButton } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const Header = (props) => {
    const stylesMap = {
        style1,
        style2
    }
    const classes = useStyles();
    return (
        <div className={`${stylesMap.style1.container} ${stylesMap.style2[props.theme]}`}>
            <div className={style1.header__wrapper}>
                <Logo></Logo>
                <div className={style1.login}>
                    <MenuArea {...props}></MenuArea>
                </div>

                <div className={style1.hamburger}>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                </div>

            </div>
        </div>
    )
}

export default Header;