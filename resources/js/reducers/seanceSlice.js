import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const initialState = {
    session: {},
    seats: [],
};

export const getSeance = createAsyncThunk("seance/getSeats", async (id) => {
    const response = await fetch(`/api/client/seats/${id}`);
    const data = await response.json();
    return data;
});

const seanceSlice = createSlice({
    name: "seance",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getSeance.fulfilled, (state, action) => {
                const { session, seats } = action.payload;
                state.session = session;
                state.seats = seats;
            });
    },
});

export default seanceSlice.reducer;
