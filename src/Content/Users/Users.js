
import c from "./Users.module.css"
import userDefaultAvatar from "../Images/userDefault.jpg"
import { NavLink } from "react-router-dom"
import { Pagenator } from "../Common/Pagenator"
const Users = (props) => {


    return <div>
        <Pagenator totalItemsCount={props.totalUsersCount} pageSize={props.pageSize} currentPage={props.currentPage} changePage={props.changePage} portionSize={props.portionSize}/>

        {props.users.map(e => {

            return (
                <div key={e.id} className={c.profileContainer}>

                    <div className={c.profileMainWrapper}>
                        <NavLink to={`profile/${e.id}`} >
                            <div className={c.avatarWrapper}>
                                <img className={c.avatar} src={e.photos.small != null ? e.photos.small : userDefaultAvatar} alt="profile-avatar" />
                            </div>

                        </NavLink>
                        <div className={c.btnWrapper}>
                            {e.followed
                                ? <button disabled={props.toggleIsFollowing.some(id => id === e.id)} onClick={() => { props.unfollowThunk(e.id) }}>unfollow</button>
                                : <button disabled={props.toggleIsFollowing.some(id => id === e.id)} onClick={() => { props.followThunk(e.id) }}>follow</button>}
                        </div>
                    </div>
                    <div className={c.profileSecondWrapper}>
                        <div className={c.name}>{e.name}</div>
                        <div className={c.status}>{e.status}</div>
                    </div>
                    <div className={c.profileLocationWrapper}>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            )
        })}
    </div>
}

export default Users