
export const dialogReducer = (state, action) => {
    switch (action.type) {
        case "ADD-DIALOG_MESSAGE":

            let dialogMessagesLength = state.dialogMessages.length + 1;
            state.dialogMessages.push({ id: dialogMessagesLength, author: "Author", message: state.dialogTextArea })
            state.dialogTextArea = ""
            return state
        case "UPDATE-DIALOG-TEXT-AREA":

            state.dialogTextArea = action.text;
            return state
        default:
            return state
    }
}

export const addDialogMessageActionCreator = () => ({ type: "ADD-DIALOG_MESSAGE" })
export const updateDialogTextAreaActionCreator = (value) => ({ type: "UPDATE-DIALOG-TEXT-AREA", text: value })