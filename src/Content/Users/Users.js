
import c from "./Users.module.css"
import userDefaultAvatar from "../Images/userDefault.jpg"
const Users = (params) => {

    
        let props = params.props
        
        let pageCount = Math.ceil(props.totalUsersCount / props.pageSize) 

        let pages = []

        for (let i = 1; i <= pageCount; i++) {
            pages.push(i)
        }
        return <div>
            <div className={c.pagesCount}>
                {pages.map(e => {
                    return <div className={props.currentPage === e && c.active} onClick={()=> params.changePage(e)}>{e}</div>
                })}
            </div>

            {props.users.map(e => {

                return (
                    <div key={e.id} className={c.profileContainer}>

                        <div className={c.profileMainWrapper}>
                            <div className={c.avatarWrapper}>
                                <img src={e.photos.small != null ? e.photos.small : userDefaultAvatar} alt="profile-avatar" />
                            </div>
                            <div className={c.btnWrapper}>
                                {e.followed
                                    ? <button onClick={() => props.unfollow(e.id)}>unfollow</button>
                                    : <button onClick={() => props.follow(e.id)}>follow</button>}
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