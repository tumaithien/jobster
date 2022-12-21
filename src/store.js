import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./feartures/user/userSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
  },
});
