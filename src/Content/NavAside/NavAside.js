import style1 from "./NavAside.module.css"
import NavSite from "./NavSite/NavSite";
import { connect } from "react-redux";
import style2 from "./../Common/ThemeStyle.module.css"
const NavAside = (props) => {
    
     const stylesMap = {
         style1,
         style2
     }
    return (
        <div className={`${stylesMap.style1.aside__container} ${stylesMap.style2[props.theme]}`}>
            <NavSite></NavSite>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        theme: state.settings.theme
    }
  
}
export default connect(mapStateToProps, null)(NavAside) ;