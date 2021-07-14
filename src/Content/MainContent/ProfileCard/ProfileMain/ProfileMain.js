import c from "./ProfileMain.module.css"
import ProfileChangeStatus from "./ProfileChangeStatus/ProfileChangeStatus"

const ProfileMain = function (props) {
  return (
    <div>
      <div className={c.profile}>
        <div>{props.mainProfile.status}</div>
      </div>
      <ProfileChangeStatus mainProfile={props.mainProfile} addMessage={props.addMessage} changeTextArea={props.changeTextArea}/>
    </div>



  )
}

export default ProfileMain