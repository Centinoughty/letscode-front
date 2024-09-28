import { createSlice } from "@reduxjs/toolkit";

const initialNotificationState = {
  message: null,
};

const notificationSlice = createSlice({
  name: "notification",
  initialState: initialNotificationState,
  reducers: {
    write: (state, action) => {
      state.message = action.payload;
    },
    empty: (state) => {
      state.message = null;
    },
  },
});

export const { write, empty } = notificationSlice.actions;
export default notificationSlice.reducer;
