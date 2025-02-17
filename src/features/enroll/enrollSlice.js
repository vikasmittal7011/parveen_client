import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { enrollStudent } from "./enrollAPI";

const initialState = {
  status: "idle",
  message: null,
  dataSend: false,
};

export const enrollStudentAync = createAsyncThunk(
  "enroll/generateOTP",
  async (data) => {
    const response = await enrollStudent(data);
    return response;
  }
);

export const enrollSlice = createSlice({
  name: "enroll",
  initialState,
  reducers: {
    clearMessage: (state) => {
      state.message = null;
    },
    resetDataSend: (state) => {
      state.dataSend = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(enrollStudentAync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(enrollStudentAync.fulfilled, (state) => {
        state.status = "idle";
        state.passwordReset = true;
        state.dataSend = true;
        state.message = "Enrollment successful...";
      })
      .addCase(enrollStudentAync.rejected, (state, action) => {
        state.status = "failed";
        state.message = action.error.message;
      });
  },
});

export const { clearMessage, resetDataSend } = enrollSlice.actions;

export const selectenroll = (state) => state.enroll;

export default enrollSlice.reducer;
