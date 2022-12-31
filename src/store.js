import { configureStore } from "@reduxjs/toolkit";
import jobSlice from "./feartures/job/jobSlice";
import userSlice from "./feartures/user/userSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    job: jobSlice,
  },
});
