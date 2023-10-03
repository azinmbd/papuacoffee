import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  error: null,
  success: false,
};

const userRegisterSlice = createSlice({
  name: "userRegister",
  initialState,
  reducers: {
    registerStart: (state) => {
      state.loading = true;
      state.error = null;
      state.success = false;
    },
    registerSuccess: (state) => {
      state.loading = false;
      state.error = null;
      state.success = true;
    },
    registerFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.success = false;
    },
  },
});

export const { registerStart, registerSuccess, registerFailure } =
  userRegisterSlice.actions;

export const registerUser = (formData) => async (dispatch) => {
  dispatch(registerStart());
  try {
    const response = await axios.post(
      "https://papuacoffee.onrender.com/user/register",
      formData
    );
    dispatch(registerSuccess(response.data));
  } catch (error) {
    dispatch(registerFailure(error.message));
  }
};

export default userRegisterSlice.reducer;
