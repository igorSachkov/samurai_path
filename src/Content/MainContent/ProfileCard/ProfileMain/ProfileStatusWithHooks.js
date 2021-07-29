import c from "./ProfileMain.module.css"
import ProfileChangeStatus from "./ProfileChangeStatus/ProfileChangeStatus"
import React, {useState} from "react"






const ProfileStatusWithHooks =(props) => {
    const [state, setState] = useState(false);
    const [status, setStatus] = useState(props.status);

    const activateModeChange = () => {
      setState(true)
    }

    const deactivateModeChange = () => {
      setState(false)
    }

    const changeTextArea = (value)=> {
      setStatus(value)
    }

    return (
      <div>
        {!state && <div className={c.profile}>
          <div onClick={activateModeChange}>*{props.status}*</div>
        </div>}
        {state && <ProfileChangeStatus deactivateModeChange={deactivateModeChange} updateProfileStatusThunk={props.updateProfileStatusThunk}
        changeTextArea={props.changeTextArea} status={status} changeTextArea={changeTextArea}
        />}
      </div>
    )


  }

export default ProfileStatusWithHooks