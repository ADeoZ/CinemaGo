import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    active: false,
    form: "",
    id: -1,
};

const popupSlice = createSlice({
    name: "popup",
    initialState,
    reducers: {
        showPopup: (state, action) => {
            const {form, id = -1} = action.payload;
            state.form = form;
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
