import c from "./FriendItem.module.css"



const FriendItem = function (props) {
    
    let friendsList = props.friends.map((el) => {
        return (
            <div className={c.friendList}>
                <div className={c.avatar}>
                    <img src={el.avatar} alt="avatar"></img>
                </div>
                <div className="name">{el.name}</div>
            </div>

        )
    })

    return (
        <div>{friendsList}</div>

    )
}

export default FriendItem;