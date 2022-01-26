import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const initialState = {
    films: [],
    halls: [],
};

export const getSchedule = createAsyncThunk("schedule/getSchedule", async () => {
    const response = await fetch(`/api/client/schedule`);
    const data = await response.json();
    return data;
});

const scheduleSlice = createSlice({
    name: "schedule",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getSchedule.fulfilled, (state, action) => {
                const { films, halls } = action.payload;
                state.films = films;
                state.halls = halls;
            });
    },
});

export default scheduleSlice.reducer;
