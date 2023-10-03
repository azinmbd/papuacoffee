import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  refreshToken: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  user: [],
  reducers: {
    loginSuccess(state, action) {
      state.refreshToken = action.payload;
    },
    logout(state, action) {
      state.refreshToken = action.payload;
    },
    userInfo(state, action) {
      state.user = action.payload;
    },

  },
});

export const { loginSuccess, userInfo, logout } = authSlice.actions;

export const login = (email, password) => async (dispatch) => {
  try {
    const response = await axios.post(
      "https://papuacoffee.onrender.com/user/login",
      {
        email,
        password,
      }
    );
    dispatch(loginSuccess(response.data.data.refreshToken));
    dispatch(userInfo(response.data.data.users));
  } catch (error) {
    console.log(error);
  }
};

export const deleteToken = (refreshToken, userId) => async (dispatch) => {
  try {
    const response = await axios.post(
      "https://papuacoffee.onrender.com/user/logout",
      {
        refreshToken,
        userId,
      }
    );
    if (response.data.success) {
      dispatch(logout(null));
    }
  } catch (error) {
    console.log(error);
  }
};

export default authSlice.reducer;
