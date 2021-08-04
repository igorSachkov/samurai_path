import style1 from "./MobileFooter.module.css"
import style2 from "./../Common/ThemeStyle.module.css"
import MusicIcon from "../Images/music-player.png"
import Dialogs from "../Images/dialog.png"
import profileIcon from "../Images/profile-icon.png"
import news from "../Images/news.png"
import { NavLink } from "react-router-dom"
import { connect } from "react-redux"



const MobileFooter =  (props) => {
    const stylesMap = {
        style1,
        style2
    }
    return (
        <div className={`${stylesMap.style1.mobileFooterContainer} ${stylesMap.style2[props.theme]}`}>
            <NavLink to={`profile`}>
            <img src={profileIcon}></img>
            </NavLink>
            <NavLink to={`dialogs`}>
                <img src={Dialogs}></img>
            </NavLink>
            <NavLink to={`news`}>
            <img src={news}></img>
            </NavLink>
            <NavLink to={`music`}>
                <img src={MusicIcon}></img>
            </NavLink>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        theme: state.settings.theme
    }
}
export default connect(mapStateToProps, null)(MobileFooter);