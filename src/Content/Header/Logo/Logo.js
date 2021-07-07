import logoImage from "../../Images/social-logo.png"
import c from "./Logo.module.css"

const Logo = function() {
    return (
        <a href="index.html">
            <img src={logoImage} alt="logo" className={c.logo} />
            <span className={c.logo__text}>MySocialNetworkName</span>
        </a>
    )
}

export default Logo;
