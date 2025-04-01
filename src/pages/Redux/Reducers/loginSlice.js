import { createSlice } from "@reduxjs/toolkit";
import { login } from "../Actions/loginThunk";

const loginSlice = createSlice({
    name: "login",
    initialState: {
        data: null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            // ✅ Handle accountStatus
            .addCase(login.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(login.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

    },
});

export default loginSlice.reducer;
