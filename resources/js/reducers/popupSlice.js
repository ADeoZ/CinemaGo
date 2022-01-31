import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    active: false,
    form: "",
};

const popupSlice = createSlice({
    name: "popup",
    initialState,
    reducers: {
        showPopup: (state, action) => {
            state.form = action.payload;
            state.active = true;
        },
        closePopup: (state) => {
            return initialState
        },
    },
});

export const {showPopup, closePopup} = popupSlice.actions;
export default popupSlice.reducer;
