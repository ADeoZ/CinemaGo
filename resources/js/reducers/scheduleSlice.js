import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const today = new Date();
const initialState = {
    chosenDate: `${today.getFullYear()}-${('0' + (today.getMonth() + 1)).slice(-2)}-${('0' + today.getDate()).slice(-2)}`,
    halls: [],
    films: [],
};

export const getSchedule = createAsyncThunk("schedule/getSchedule", async (date) => {
    const response = await fetch(`/api/client/schedule/${date}`);
    return await response.json();
});

const scheduleSlice = createSlice({
    name: "schedule",
    initialState,
    reducers: {
        chooseDate: (state, action) => {
            state.chosenDate = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getSchedule.fulfilled, (state, action) => {
                const {halls, sessions, films} = action.payload;
                state.halls = halls.map((hall) => {
                    return {...hall, "sessions": sessions.filter((session) => +session.hall_id === hall.id)}
                });
                state.films = films;
            });
    },
});

export const {chooseDate} = scheduleSlice.actions;
export default scheduleSlice.reducer;
