import c from "./ProfileMain.module.css"


const ProfileMain = function (props) {
    return (
        <div className={c.profile}>
          <h3>{props.mainProfile.header}</h3>
          <div>{props.mainProfile.status}</div>
        </div>


    )
}

export default ProfileMain