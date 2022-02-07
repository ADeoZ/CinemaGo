import {configureStore} from "@reduxjs/toolkit";
import schedule from "../reducers/scheduleSlice";
import seance from "../reducers/seanceSlice";
import popup from "../reducers/popupSlice";
import admin from "../reducers/adminSlice";
import auth from "../reducers/authSlice";
import {loadFromSessionStorage, saveToSessionStorage} from "./sessionStorageWorkers";

export const store = configureStore({
    reducer: {
        schedule,
        seance,
        auth,
        admin,
        popup,
    },
    // загрузка токена из session storage
    preloadedState: {auth: loadFromSessionStorage("auth")},
});

// запись токена в session storage
store.subscribe(() => {
    saveToSessionStorage("auth", store.getState().auth);
});
