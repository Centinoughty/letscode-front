import { write } from "@/store/reducers/notificationReducer";
import { login } from "../reducers/authReducer";

import axios from "axios";

export const loginAction = (credentials) => async (dispatch) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_API}/auth/login`,
      credentials
    );

    const { token, user } = response.data;
    dispatch(login({ token, user }));
    dispatch(write(response.data.message));
    localStorage.setItem("token", token);
  } catch (error) {
    dispatch(write(error.response?.data?.message));
    console.log("Internal Server Error");
  }
};

export const signUpAction = (credentials) => async (dispatch) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_API}/auth/register`,
      credentials
    );

    const { token, user } = response.data;
    dispatch(login({ token, user }));
    localStorage.setItem("token", token);
  } catch (error) {
    dispatch(write(error.response?.data?.message));
    console.log("Internal Serevr Error");
  }
};
