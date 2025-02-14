import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchReviews, postReview } from "./reviewAPI";

const initialState = {
  reviews: [],
  status: "idle",
  message: "",
  totalReviews: null,
  isReviewAdded: 0,
};

export const postReviewAsync = createAsyncThunk(
  "review/postReview",
  async (review) => {
    const response = await postReview(review);
    return response;
  }
);

export const fetchReviewsAsync = createAsyncThunk(
  "review/fetchReviews",
  async ({ id, pagination }) => {
    const response = await fetchReviews(id, pagination);
    return response;
  }
);

export const reviewSlice = createSlice({
  name: "review",
  initialState,
  reducers: {
    clearMessage: (state) => {
      state.message = "";
    },
    reviewOut: (state) => {
      state.reviews = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(postReviewAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(postReviewAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.isReviewAdded = ++state.isReviewAdded;
        state.message = "Review added successfully";
      })
      .addCase(postReviewAsync.rejected, (state, action) => {
        state.status = "idle";
        state.message = action.error.message;
        state.isReviewAdded = 0;
      })
      .addCase(fetchReviewsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchReviewsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.reviews = action.payload.data.reviews || 0;
        state.totalReviews = action.payload.data.totalReviews || 0;
      })
      .addCase(fetchReviewsAsync.rejected, (state, action) => {
        state.status = "idle";
        state.message = action.payload;
      });
  },
});

export const { clearMessage, reviewOut } = reviewSlice.actions;

export const selectReview = (state) => state.review;

export default reviewSlice.reducer;
