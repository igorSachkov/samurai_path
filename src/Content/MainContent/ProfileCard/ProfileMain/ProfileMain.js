import c from "./ProfileMain.module.css"
import ProfileChangeStatus from "./ProfileChangeStatus/ProfileChangeStatus"

const ProfileMain = function (props) {
  return (
    <div>
      <div className={c.profile}>
        <div>{props.store._state.profilePage.mainProfile.status}</div>
      </div>
      <ProfileChangeStatus store={props.store} />
    </div>



  )
}

export default ProfileMain