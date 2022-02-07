import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const initialState = {
    token: "",
    status: "idle",
};

export const getToken = createAsyncThunk(
    "auth/getToken",
    async ({email, password}) => {
        const response = await fetch(`/api/tokens/create`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({email, password}),
        });
        if (response.status !== 200) {
            throw response.statusText;
        }
        return await response.json();
    }
);

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        resetAuthStatus: (state) => {
            state.status = "idle";
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getToken.rejected, (state) => {
                state.status = "error";
            })
            .addCase(getToken.fulfilled, (state, action) => {
                state.token = action.payload.token;
                state.status = "success";
            })
    },
});

export const {resetAuthStatus} = authSlice.actions;
export default authSlice.reducer;
