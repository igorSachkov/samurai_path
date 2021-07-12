const DialogItem = function (props) {
    
    let friendsList = props.dialogs.map((el) => {
        return (
            
            <div key={el.id}>
                <div>{el.author}</div>
                <div>{el.message}</div>
            </div>

        )
    })

    return (
        <div>{friendsList}</div>

    )
}
export default DialogItem