import c from "./ProfileMain.module.css"
import ProfileChangeStatus from "./ProfileChangeStatus/ProfileChangeStatus"

const ProfileMain = function (props) {
  debugger
  return (
    <div>
      <div className={c.profile}>
        <div>{props.mainProfile.status}</div>
      </div>
      <ProfileChangeStatus mainProfile={props.mainProfile} changeProfileStatus={props.changeProfileStatus} updateProfileChangeStatusTextArea={props.updateProfileChangeStatusTextArea}/>
    </div>



  )
}

export default ProfileMain