import { configureStore } from "@reduxjs/toolkit";

import authReducer from "../features/auth/authSlice";
import userReducer from "../features/user/userSlice";
import courseReducer from "../features/course/courseSlice";
import enrollReducer from "../features/enroll/enrollSlice";
import reviewReducer from "../features/review/reviewSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    course: courseReducer,
    enroll: enrollReducer,
    review: reviewReducer,
  },
});
