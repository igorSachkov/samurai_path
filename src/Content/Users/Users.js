

const Users = (props) => {

    //временная заглушка
    if(props.users.length === 0) {
        props.setUsers([        { id: 1, fullName: "Kostya", status: "Лев сильнее волка, но волк в цирке не выступает", location: { city: "Volgograd", country: "Russia" }, followed: true },
        { id: 2, fullName: "Svirepy", status: "Настоящий мужик должен", location: { city: "St. Petersburg", country: "Russia" }, followed: false },
        { id: 3, fullName: "Masha", status: "oh my", location: { city: "Kiev", country: "Ukraine" }, followed: true },
        { id: 4, fullName: "Karl", status: "cool", location: { city: "Berlin", country: "Germany" }, followed: false },])
    }
    return <div>
        {props.users.map(e => {
            return (
                <div key={e.id}>
                    <div>ava</div>
                    <div>
                        {e.followed 
                        ? <button onClick={()=> props.unfollow(e.id)}>unfollow</button> 
                        : <button onClick={()=> props.follow(e.id)}>follow</button>}
                    </div>
                    <div>{e.fullName}</div>
                    <div>{e.status}</div>
                </div>
            )
        })}
    </div>
}

export default Users