import { constants } from "./constants"

let initialStore = {
    dialogsArray: [
        { id: "1", avatar: "https://image.freepik.com/free-photo/handsome-young-man-pink-shirt-isolated-blue-wall-laughing_1368-55070.jpg", name: "Кирилл", status: "online" },
        { id: "2", avatar: "https://image.freepik.com/free-photo/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction_176420-15187.jpg", name: "Анастасия", status: "online" },
        { id: "3", avatar: "https://image.freepik.com/free-photo/airplane-russian-pilot-isolated-white-background-having-doubts-thinking_1368-213719.jpg", name: "Филипп", status: "offline" },
        { id: "4", avatar: "https://image.freepik.com/free-photo/african-american-handsome-man-isolated-pink-background-shouting-through-megaphone-pointing-side_1368-213685.jpg", name: "Григорий", status: "online" },
        { id: "5", avatar: "https://image.freepik.com/free-photo/handsome-freelancer-man-holding-laptop-smiling-standing-happy-light-turquoise-wall_1258-23916.jpg", name: "Артем", status: "online" }
    ],
    dialogMessages: [
        { id: 1, author: "Kirill", message: "Oh hi Mark." },
        { id: 2, author: "Kirill", message: "hello there" },
        { id: 3, author: "Kirill", message: "why are you running?" },
    ],
    dialogTextArea: ""
}


export const dialogReducer = (state = initialStore, action) => {
    switch (action.type) {
        case constants.dialogReducer.ADD_DIALOG_MESSAGE: 
            return {
                ...state,
                dialogMessages: [...state.dialogMessages, {id: state.dialogMessages.length + 1, author: `Author`, message: action.message}]
            }
        default:
            return state
    }
}

export const addDialogMessage = (message) => ({ type: constants.dialogReducer.ADD_DIALOG_MESSAGE, message })
