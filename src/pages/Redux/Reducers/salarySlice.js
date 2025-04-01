import { createSlice } from "@reduxjs/toolkit";
import { salaryCreate } from "../Actions/salaryThunk";

const salarySlice = createSlice({
  name: "salary",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // ✅ Handle accountStatus
      .addCase(salaryCreate.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(salaryCreate.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(salaryCreate.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

    // ✅ Handle accountDelete
    // .addCase(accountDelete.pending, (state) => {
    //   state.loading = true;
    //   state.error = null;
    // })
    // .addCase(accountDelete.fulfilled, (state, action) => {
    //   state.loading = false;
    //   state.accounts = state.accounts.filter((acc) => acc.id !== action.payload.id);
    // })
    // .addCase(accountDelete.rejected, (state, action) => {
    //   state.loading = false;
    //   state.error = action.payload;
    // });
  },
});

export default salarySlice.reducer;
