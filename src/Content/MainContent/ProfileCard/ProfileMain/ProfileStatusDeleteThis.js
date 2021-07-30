import c from "./ProfileMain.module.css"
import ProfileChangeStatus from "./ProfileChangeStatus/ProfileChangeStatus"
import React from "react"

class ProfileStatus extends React.Component {
  componentDidMount() {
    
    this.props.getProfileStatusThunk(this.props.profileId)
  }
  componentDidUpdate(prevProps, prevState) {
    let a =this.props
    let b = this.state
  }
  state = {
    editMode: false,
    status: this.props.status
  }
  changeTextArea = (value)=> {
    this.setState({
      status: value
    })
  }
  activateModeChange = () => {
    this.setState({
      editMode: true
    })
  }
  deactivateModeChange = () => {
    this.setState({
      editMode: false
    })
  }
  render() {
    
    return (
      <div>
        {!this.state.editMode && <div className={c.profile}>
          <div onClick={() => this.activateModeChange()}>{this.props.status}</div>
        </div>}
        {this.state.editMode && <ProfileChangeStatus deactivateModeChange={this.deactivateModeChange} mainProfile={this.props.mainProfile} 
        changeProfileStatus={this.props.changeProfileStatus} updateProfileChangeStatusTextArea={this.props.updateProfileChangeStatusTextArea} status={this.state.status}
        updateProfileStatusThunk={this.props.updateProfileStatusThunk} changeTextArea={this.changeTextArea}
        />}
      </div>
    )


  }




}

export default ProfileStatus