import c from "./MobileFooter.module.css"
import MusicIcon from "../Images/music-player.png"
import Dialogs from "../Images/dialog.png"
import profileIcon from "../Images/profile-icon.png"
import news from "../Images/news.png"
import { NavLink } from "react-router-dom"

const MobileFooter = function () {
    return (
        <div className={c.mobileFooterContainer}>
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

export default MobileFooter;