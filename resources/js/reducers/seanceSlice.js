import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const initialState = {
    session: {},
    seats: [],
    ticket: {},
};

export const getSeance = createAsyncThunk("seance/getSeats", async (id) => {
    const response = await fetch(`/api/client/seats/${id}`);
    const data = await response.json();
    return data;
});

const seanceSlice = createSlice({
    name: "seance",
    initialState,
    reducers: {
        resetSeance: (state) => {
            return initialState
        },
        createTicket: (state, action) => {
            const { seanceId, seats, cost } = action.payload;
            state.ticket = {seanceId, seats, cost};
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getSeance.fulfilled, (state, action) => {
                const { session, seats } = action.payload;
                state.session = session;
                state.seats = seats;
            });
    },
});

export const { resetSeance, createTicket } = seanceSlice.actions;
export default seanceSlice.reducer;
