import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authReducer";
import notificationReducer from "./reducers/notificationReducer";

const store = configureStore({
  reducer: {
    auth: authReducer,
    notification: notificationReducer,
  },
});

export default store;
