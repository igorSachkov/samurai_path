
import c from "./Users.module.css"
import userDefaultAvatar from "../Images/userDefault.jpg"
import { NavLink } from "react-router-dom"
import axios from "axios"
const Users = (params) => {

    let props = params.props
    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []

    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }
    return <div>
        <div className={c.pagesCount}>
            {pages.map((e, i) => {

                return <div className={props.currentPage === e && c.active} onClick={() => params.changePage(e)} key={i}>{e}</div>
            })}
        </div>

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
                                ? <button onClick={() => {
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${e.id}`, { withCredentials: true, headers: {"API-KEY": "41823454-5c69-4ffd-9e94-f07cc8d73f73"} })
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                
                                                props.unfollow(e.id)
                                            }})}}>unfollow</button>
                                : <button onClick={() => {
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${e.id}`, {}, { withCredentials: true, headers: {"API-KEY": "41823454-5c69-4ffd-9e94-f07cc8d73f73"} })
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                
                                                props.follow(e.id)
                                            } })}}>follow</button>}
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