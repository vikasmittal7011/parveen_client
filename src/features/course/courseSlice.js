import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createCourse,
  enrollStudent,
  getCourseById,
  getCourses,
} from "./courseAPI";

const initialState = {
  status: "idle",
  courses: [],
  course: {},
  newCourse: {},
  enrollSuccess: false,
  message: "",
};

export const createCourceAsync = createAsyncThunk(
  "cource/createCourceData",
  async (course) => {
    const response = await createCourse(course);
    return response;
  }
);

export const fetchCoursesAsync = createAsyncThunk(
  "cource/fetchCourses",
  async () => {
    const response = await getCourses();
    return response;
  }
);

export const fetchCoursesByIdAsync = createAsyncThunk(
  "cource/fetchCoursesById",
  async (id) => {
    const response = await getCourseById(id);
    return response;
  }
);

export const enrollStudentAsync = createAsyncThunk(
  "cource/enrollStudent",
  async (courseId) => {
    const response = await enrollStudent(courseId);
    return response;
  }
);

export const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    clearMessage: (state) => {
      state.message = null;
    },
    emptyNewCourse: (state) => {
      state.newCourse = {};
    },
    clearEnrollSuccess: (state) => {
      state.enrollSuccess = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createCourceAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createCourceAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.newCourse = action.payload.data.data;
      })
      .addCase(createCourceAsync.rejected, (state, action) => {
        state.status = "failed";
        state.message = action.error.message;
      })
      .addCase(fetchCoursesAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCoursesAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.courses = action.payload.data.data;
      })
      .addCase(fetchCoursesAsync.rejected, (state, action) => {
        state.status = "failed";
        state.message = action.error.message;
      })
      .addCase(fetchCoursesByIdAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCoursesByIdAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.course = action.payload.data.data;
      })
      .addCase(fetchCoursesByIdAsync.rejected, (state, action) => {
        state.status = "failed";
        state.message = action.error.message;
      })
      .addCase(enrollStudentAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(enrollStudentAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.message = action.payload.data.message;
        state.enrollSuccess = true;
      })
      .addCase(enrollStudentAsync.rejected, (state, action) => {
        state.status = "failed";
        state.message = action.error.message;
      });
  },
});

export const { clearMessage, emptyNewCourse, clearEnrollSuccess } = courseSlice.actions;

export const selectcourse = (state) => state.course;

export default courseSlice.reducer;
