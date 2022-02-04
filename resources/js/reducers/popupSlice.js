import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    active: false,
    title: "",
    form: "",
    id: -1,
};

const popupSlice = createSlice({
    name: "popup",
    initialState,
    reducers: {
        showPopup: (state, action) => {
            const {form, title, id = -1} = action.payload;
            state.form = form;
            state.title = title;
            state.id = id;
            state.active = true;
        },
        closePopup: (state) => {
            return initialState
        },
    },
});

export const {showPopup, closePopup} = popupSlice.actions;
export default popupSlice.reducer;
