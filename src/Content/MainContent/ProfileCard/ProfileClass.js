import axios from "axios"
import React from "react"
import ProfileCard from "./ProfileCard"

class ProfileClass extends React.Component {
    
    constructor(props) {
        
        super(props)
    }
    render() {
        
        return (
            <ProfileCard {...this.props}/>
        )
    }
    componentDidMount() {
            let userId = this.props.match.params.userId;
            
            let promise = axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            promise.then(response => {
                this.props.setUserProfile(response.data)
            })

        }
    }


export default ProfileClass