import logoImage from "../../Images/social-logo.png"
import c from "./Logo.module.css"

const Logo = function() {
    return (
        <a href="index.html">
            <img src={logoImage} alt="logo" className={c.logo} />
            <span className={c.logo__text}><i>M</i>y<i>S</i>ocial<i>N</i>etwork<i>N</i>ame</span>
            <span className={c.logo__text__small}>MSNN</span>
        </a>
    )
}

export default Logo;
