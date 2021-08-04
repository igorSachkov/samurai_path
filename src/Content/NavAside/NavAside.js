import c from "./NavAside.module.css"
import NavSite from "./NavSite/NavSite";
import { connect } from "react-redux";
import style from "./../Common/ThemeStyle.module.css"
const NavAside = (props) => {
    
    const theme = props.theme
    // debugger
    return (
        <div className={c.aside__container}>
            <NavSite></NavSite>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        backgroundColor: state.settings.backgroundColor,
        theme: state.settings.theme
    }
  
}
export default connect(mapStateToProps, null)(NavAside) ;