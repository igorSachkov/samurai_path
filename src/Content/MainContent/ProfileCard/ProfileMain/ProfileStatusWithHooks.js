import c from "./ProfileMain.module.css"
import ProfileChangeStatus from "./ProfileChangeStatus/ProfileChangeStatus"
import React, { useState, useEffect } from "react"

const ProfileStatusWithHooks = (props) => {

  const [state, setState] = useState(false);
  const [status, setStatus] = useState(props.status);

  const activateModeChange = () => {
    setState(true)
  }

  const deactivateModeChange = () => {
    setState(false)
  }

  useEffect(() => {
    setStatus(props.status)
  }, [props.status])

  let changeStatus = (status) => {
    props.updateProfileStatusThunk(status.profileStatus)
    deactivateModeChange()
  }

  return (
    <div>
      {!state && <div className={c.profile}>
        <div onClick={activateModeChange}>*{props.status}*</div>
      </div>}
      {state && <ProfileChangeStatus onSubmit={changeStatus} status={status}/>}
    </div>
  )


}

export default ProfileStatusWithHooks