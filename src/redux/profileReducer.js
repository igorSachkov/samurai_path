export const profileReducer = (state, action) => {
   
    
    switch (action.type) {
        case "UPDATE-PROFILE-CHANGE-STATUS-TEXT-AREA":

            state.mainProfile.profileChangeStatusTextArea = action.text;
            return state;
        case "CHANGE-PROFILE-STATUS":

            state.mainProfile.status = state.mainProfile.profileChangeStatusTextArea;
            state.mainProfile.profileChangeStatusTextArea = "";
            return state;
        default:
            return state;

    }
}
export const updateProfileChangeStatusTextArea = (value) => ({ type: "UPDATE-PROFILE-CHANGE-STATUS-TEXT-AREA", text: value })
export const changeProfileStatus = () => ({ type: "CHANGE-PROFILE-STATUS" })