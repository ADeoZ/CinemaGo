import { configureStore } from "@reduxjs/toolkit";
import schedule from "../reducers/scheduleSlice";
import seance from "../reducers/seanceSlice";
import popup from "../reducers/popupSlice";

export const store = configureStore({
    reducer: {
        schedule,
        seance,
        popup,
    },
});
