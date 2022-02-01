import { configureStore } from "@reduxjs/toolkit";
import schedule from "../reducers/scheduleSlice";
import seance from "../reducers/seanceSlice";
import popup from "../reducers/popupSlice";
import admin from "../reducers/adminSlice";

export const store = configureStore({
    reducer: {
        schedule,
        seance,
        admin,
        popup,
    },
});
