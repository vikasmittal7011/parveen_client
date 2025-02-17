import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createCategory, getCategories } from "./categoryAPI";

const initialState = {
  status: "idle",
  categories: [],
  category: {},
  newCategory: {},
  message: "",
};

export const createCategoryAsync = createAsyncThunk(
  "category/createCategoryData",
  async (category) => {
    return await createCategory(category);
  }
);

export const getCategoriesAsync = createAsyncThunk(
  "category/getCategories",
  async () => {
    return await getCategories();
  }
);

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    clearMessage: (state) => {
      state.message = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createCategoryAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createCategoryAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.newCategory = action.payload.data.data;
      })
      .addCase(createCategoryAsync.rejected, (state, action) => {
        state.status = "failed";
        state.message = action.error.message;
      })
      .addCase(getCategoriesAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getCategoriesAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.categories = action.payload.data.data;
      })
      .addCase(getCategoriesAsync.rejected, (state, action) => {
        state.status = "failed";
        state.message = action.error.message;
      });
  },
});

export const { clearMessage } = categorySlice.actions;

export const selectcategory = (state) => state.category;

export default categorySlice.reducer;
