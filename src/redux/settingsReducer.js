import { constants } from "./constants"
const initialStore = {
    theme: `lightTheme`
}

export const settingsReducer = (state = initialStore, action) => {

    switch (action.type) {
        case constants.settingsReducer.SET_STYLE:

            return {
                ...state,
                theme: action.style
            }

        default:
            return state
    }
}

export const setStyle = (style) => ({ type: constants.settingsReducer.SET_STYLE, style})
