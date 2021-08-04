const DialogItem = (props) => {
    let friendsMessages = props.dialogs.map((el) => {
        return (
            <div key={el.id}>
                <div>{el.author}</div>
                <div>{el.message}</div>
            </div>
        )
    })
    return (
        <div>{friendsMessages}</div>
    )
}
export default DialogItem