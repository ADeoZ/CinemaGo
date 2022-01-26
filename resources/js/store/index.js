import { configureStore } from "@reduxjs/toolkit";
import schedule from "../reducers/scheduleSlice";
import seance from "../reducers/seanceSlice";

export const store = configureStore({
    reducer: {
        schedule,
        seance,
    },
});
