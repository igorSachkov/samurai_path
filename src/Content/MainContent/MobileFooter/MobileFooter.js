import c from "./MobileFooter.module.css"
import MusicIcon from "../Images/music-player.png"
import Dialogs from "../Images/dialog.png"

const MobileFooter = function () {
    return (
        <div className={c.mobileFooterContainer}>
            <div>P</div>
            <div className={c.dialogsBtn}>
                <img src={Dialogs}></img>
            </div>
            <div>N</div>
            <div className={c.musicBtn}>
                <img src={MusicIcon}></img>
            </div>

        </div>

    )
}

export default MobileFooter;