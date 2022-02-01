import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const initialState = {
    halls: [],
    seats: [],
};

export const getHalls = createAsyncThunk("admin/getHalls", async () => {
    const response = await fetch(`/api/hall`);
    return await response.json();
});

export const createHall = createAsyncThunk(
    "admin/createHall",
    async (name, {getState}) => {
        const response = await fetch(`/api/hall`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({name}),
        });
        return response.ok;
    }
);

export const deleteHall = createAsyncThunk(
    "admin/deleteHall",
    async (id, {getState}) => {
        const response = await fetch(`/api/hall/${id}`, {
            method: "DELETE",
        });
        return response.ok;
    }
);

export const getSeats = createAsyncThunk("admin/getSeats", async (id) => {
    const response = await fetch(`/api/seats/${id}`);
    return await response.json();
});

const adminSlice = createSlice({
    name: "admin",
    initialState,
    reducers: {
        createSeats: (state, action) => {
            state.seats = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getHalls.fulfilled, (state, action) => {
                state.halls = action.payload;
            })
            .addCase(getSeats.fulfilled, (state, action) => {
                state.seats = action.payload;
            })
    },
});

export const {createSeats} = adminSlice.actions;
export default adminSlice.reducer;
