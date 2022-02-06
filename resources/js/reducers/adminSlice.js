import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const initialState = {
    halls: [],
    seats: [],
    selectedHallScheme: {},
    movies: [],
    seances: [],
};

export const getHalls = createAsyncThunk(
    "admin/getHalls",
    async () => {
        const response = await fetch(`/api/hall`);
        return await response.json();
    }
);

export const createHall = createAsyncThunk(
    "admin/createHall",
    async (name) => {
        const response = await fetch(`/api/hall`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({name}),
        });
        return response.ok;
    }
);

export const updateHall = createAsyncThunk(
    "admin/updateHall",
    async (hall) => {
        const response = await fetch(`/api/hall/${hall.id}`, {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(hall),
        });
        return response.ok;
    }
);

export const deleteHall = createAsyncThunk(
    "admin/deleteHall",
    async (id) => {
        const response = await fetch(`/api/hall/${id}`, {
            method: "DELETE",
        });
        return response.ok;
    }
);

export const getSeats = createAsyncThunk(
    "admin/getSeats",
    async (id) => {
        const response = await fetch(`/api/seats/${id}`);
        return await response.json();
    });

export const createSeats = createAsyncThunk(
    "admin/createSeats",
    async (_, {getState}) => {
        const {seats} = getState().admin;
        const response = await fetch(`/api/seats`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({seats}),
        });
        return response.ok;
    }
);

export const updateSeats = createAsyncThunk(
    "admin/updateSeats",
    async (_, {getState}) => {
        const {seats} = getState().admin;
        const response = await fetch(`/api/seats/update`, {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({seats}),
        });
        return response.ok;
    }
);

export const getMovies = createAsyncThunk(
    "admin/getMovies",
    async () => {
        const response = await fetch(`/api/film`);
        return await response.json();
    }
);

export const createMovie = createAsyncThunk(
    "admin/createMovie",
    async ({title, description, duration, country}) => {
        const response = await fetch(`/api/film`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({title, description, duration, country}),
        });
        return response.ok;
    }
);

export const deleteMovie = createAsyncThunk(
    "admin/deleteMovie",
    async (id) => {
        const response = await fetch(`/api/film/${id}`, {
            method: "DELETE",
        });
        return response.ok;
    }
);

export const getSeances = createAsyncThunk(
    "admin/getSeances",
    async () => {
        const response = await fetch(`/api/session`);
        return await response.json();
    }
);

export const createSeance = createAsyncThunk(
    "admin/createSeance",
    async ({time, hall_id, film_id}) => {
        const response = await fetch(`/api/session`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({time, hall_id, film_id}),
        });
        return response.ok;
    }
);

export const deleteSeance = createAsyncThunk(
    "admin/deleteSeance",
    async (id) => {
        const response = await fetch(`/api/session/${id}`, {
            method: "DELETE",
        });
        return response.ok;
    }
);

const adminSlice = createSlice({
    name: "admin",
    initialState,
    reducers: {
        createScheme: (state, action) => {
            state.seats = action.payload;
        },
        selectHallScheme: (state, action) => {
            state.selectedHallScheme = action.payload;
        },
        changeHallSize: (state, action) => {
            const {row, row_seats} = action.payload;
            state.selectedHallScheme.row = row;
            state.selectedHallScheme.row_seats = row_seats;
        },
        changeSeatStatus: (state, action) => {
            const {id, status} = action.payload;
            const seat = state.seats.find((seat) => seat.id === id);
            seat.status = status;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getHalls.fulfilled, (state, action) => {
                state.halls = action.payload;
            })
            .addCase(getSeats.fulfilled, (state, action) => {
                state.seats = action.payload;
            })
            .addCase(getMovies.fulfilled, (state, action) => {
                state.movies = action.payload;
            })
            .addCase(getSeances.fulfilled, (state, action) => {
                state.seances = action.payload;
            })
    },
});

export const {createScheme, selectHallScheme, changeHallSize, changeSeatStatus} = adminSlice.actions;
export default adminSlice.reducer;
