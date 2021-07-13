import { profileReducer } from "./profileReducer";
import { dialogReducer } from "./dialogReducer";


export let store = {
    
    _state: {
        profilePage: {
            mainProfile: {
                profileName: "Кирилл Левобережный",
                avatar: "https://image.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg",
                mail: "kirill@mail.ru",
                background: "https://image.freepik.com/free-vector/misty-landscape-with-fog-pine-forest-mountain-slopes-illustration-nature-scene_1150-37301.jpg",
                status: "Я успешен, богат и красив, вот!",
                posts: [{ id: 1, name: "Kristina", post: "So big, wow." }, { id: 2, name: "Boris", post: "King of all mans" }],
                profileChangeStatusTextArea: ""
            },
            friends: [
                { id: "1", avatar: "https://image.freepik.com/free-photo/handsome-young-man-pink-shirt-isolated-blue-wall-laughing_1368-55070.jpg", name: "Кирилл", status: "online" },
                { id: "2", avatar: "https://image.freepik.com/free-photo/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction_176420-15187.jpg", name: "Анастасия", status: "online" },
                { id: "3", avatar: "https://image.freepik.com/free-photo/airplane-russian-pilot-isolated-white-background-having-doubts-thinking_1368-213719.jpg", name: "Филипп", status: "offline" },
                { id: "4", avatar: "https://image.freepik.com/free-photo/african-american-handsome-man-isolated-pink-background-shouting-through-megaphone-pointing-side_1368-213685.jpg", name: "Григорий", status: "online" },
                { id: "5", avatar: "https://image.freepik.com/free-photo/handsome-freelancer-man-holding-laptop-smiling-standing-happy-light-turquoise-wall_1258-23916.jpg", name: "Артем", status: "online" }
            ]
        },
        dialogPage: {
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
    },
    get state() {
        return this._state
    },
    set state(value) {
        return
    },
    _subscriber(observer) {
        this.reRender = observer;
    },
    get subscriber() {
        return this._subscriber
    },
    reRender() {
    },
    dispatch(action) {
        
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogPage = dialogReducer(this._state.dialogPage, action)
        
        this.reRender(this._state)
    }
}