import { login } from "../reducers/authReducer";

const axios = require("axios");

export const loginAction = (credentials) => async (dispatch) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_API}/auth/login`,
      credentials
    );

    const { token, user } = response.data;
    dispatch(login({ token, user }));
    localStorage.setItem('token', token)
  } catch (error) {}
};
